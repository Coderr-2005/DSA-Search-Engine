import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

const fetchAlgorithms = async () => {
  const { data } = await api.get("/algorithms");
  return data;
};

function useAlgorithms() {
  return useQuery({
    queryKey: ["algorithms"],
    queryFn: fetchAlgorithms,
  });
}

export default useAlgorithms;
