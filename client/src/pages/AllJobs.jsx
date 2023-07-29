import React, { useContext, createContext } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

import { JobsContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  try {
    const { data } = await customFetch.get("/jobs", {
      params,
    });
    return { data, searchValues: { ...params } };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const allJobsContext = createContext();

const AllJobs = () => {
  const { data, searchValues } = useLoaderData();
  return (
    <allJobsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <JobsContainer />
    </allJobsContext.Provider>
  );
};

export const useAllJobsContext = () => useContext(allJobsContext);

export default AllJobs;
