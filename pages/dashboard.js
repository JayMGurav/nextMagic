
// import useAuth from "../hooks/useAuth";

import useAuth from "@/hooks/useAuth";

export default function Dashboard() {
  const { user, loading } = useAuth();;

  console.log({user,loading});
  return (
    <>
      <h1>Dashboard</h1>
      {loading ? "Loading..." : user.email}
     
    </>
  );
}