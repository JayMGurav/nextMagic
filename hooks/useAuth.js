import useSWR from "swr";

import fetcher from "@/utils/fetcher"; 


// function fetcher(route) {
//   /* our token cookie gets sent with this request */
//   return fetch(route)
//     .then((r) => r.ok && r.json())
//     .then((user) => user || null);
// }

export default function useAuth() {
  const { data: user, error, mutate } = useSWR("/api/user", fetcher);
  const loading = !user && !error;

  return {
    user,
    loading,
    error,
  };
}