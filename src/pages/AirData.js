import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import List from "../components/list/List";
import Quality from "../components/quality/Quality";
import Graph from "../components/graph/Graph";
import { MainContainer } from "../AppStyles.js";
import ErrorMsg from "../components/errorMsg/ErrorMsg";
import useLocation from "../hooks/use-location";

const AirData = () => {
  const [canView, setCanView] = useState(true);
  const [isError, setIsError] = useState(null);
  const [components, setComponents] = useState([]);
  const [airIndex, setAirIndex] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { lat, long, isAllow } = useLocation();

  const fetchData = useCallback(async () => {
    if (lat && long) {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=23de14c96e3f808b747eec9f561cd9cc`
        );

        if (!response.ok) {
          setCanView(false);
        }

        const components = response.data.list[0].components;
        const airIndex = response.data.list[0].main.aqi;
        setComponents(components);
        setAirIndex(airIndex);
      } catch (error) {
        setIsError(error.message);
      }

      setCanView(true);
      setIsLoading(false);
    }
  }, [lat, long]);

  useEffect(() => {
    fetchData();
  }, [fetchData, lat, long]);

  return (
    <div>
      {" "}
      <ErrorMsg
        view={canView}
        error={isError}
        allowLocation={isAllow}
        loading={isLoading}
      />
      <MainContainer>
        <Quality index={airIndex} />
        <List items={components} />
        <Graph airData={components} />
      </MainContainer>
    </div>
  );
};

export default AirData;
