import useSWR from "swr";

// Fetch function for SWR
const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch advice");
  return response.json(); // Returns { slip: { id, advice } }
};

// Custom Hook
export const useAdvice = () => {
  const { data, error, isLoading, mutate } = useSWR("https://api.adviceslip.com/advice", fetcher);

  return {
    advice: data?.slip?.advice || "No advice available",
    isLoading,
    error,
    refetch: mutate, // Function to manually refetch data
  };
};
