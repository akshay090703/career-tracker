import { FaSuitcaseRolling, FaCalendarCheck } from "react-icons/fa";

import { useLoaderData, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/StatsContainer";
import { toast } from "react-toastify";
import { StatItem } from "../components";

export const loader = async () => {
  try {
    const response = await customFetch.get("/users/admin/app-stats");
    return response.data;
  } catch (error) {
    toast.error("You are not authorized to access this page");
    return redirect("/dashboard");
  }
};

export default function Admin() {
  const { users, jobs } = useLoaderData();
  return (
    <Wrapper>
      <StatItem
        title="Current users"
        count={users}
        color="#e9b949"
        bcg="#fcefct"
        icon={<FaSuitcaseRolling />}
      />
      <StatItem
        title="Total jobs"
        count={jobs}
        color="#647acb"
        bcg="#e0e8f9"
        icon={<FaCalendarCheck />}
      />
    </Wrapper>
  );
}
