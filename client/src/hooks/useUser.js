import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

const getDashboard = async () => {
  const { data } = await api.get("/user/dashboard");
  return data;
};

function useUser() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboard,
  });

  return {
    profile: data?.profile,
    stats: data?.stats,
    difficulty: data?.difficulty,
    solvedProblems: data?.solvedProblems || [],
    favoriteProblems: data?.favoriteProblems || [],
    isLoading,
    error,
    refetch,
  };
}

export default useUser;
