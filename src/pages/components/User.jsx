import { useParams } from "react-router-dom";

function User() {
  const params = useParams();

  return <p>User <b>{params.id}</b></p>;
}

export default User;
