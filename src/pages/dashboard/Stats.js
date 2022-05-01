import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChartsContainer, StatsContainer } from "../../components";
import Loading from "../../components/Loading";
import { showStats } from "../../features/allJobs/allJobsSlice";

const Stats = () => {
  const dispatch = useDispatch();
  const { isLoading, monthlyApplication } = useSelector(
    (store) => store.allJobs
  );

  useEffect(() => {
    dispatch(showStats());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <StatsContainer />
      <ChartsContainer />
    </>
  );
};

export default Stats;
