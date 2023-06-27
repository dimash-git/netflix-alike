import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export default function useMovieList() {
  const { data, error, isLoading } = useSWR("/api/movies", fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    isLoading,
    error,
  };
}
