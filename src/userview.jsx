import { useEffect } from "react";
import { useAllUsers } from "./users/use-AllUsers";

function UserView() {
  const { fetchAllUsers, users } = useAllUsers();
  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div>
      {users && (
        <div>
          {users.map((user) => (
            <p>
              {user.id} - {user.firstName} {user.lastName}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserView;
