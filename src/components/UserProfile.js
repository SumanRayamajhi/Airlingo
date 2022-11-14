import { useLoaderData } from "react-router-dom";
import Logout from "./Logout";

const UserProfile = () => {
  const users = useLoaderData();

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <img src={user.avatar} alt="Avatar" width={30} height={30} />
          <h3>{user.name}</h3>
        </div>
      ))}
      <Logout />
    </div>
  );
};

export default UserProfile;
