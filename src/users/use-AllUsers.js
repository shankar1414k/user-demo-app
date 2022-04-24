import { useState } from "react";
import { fetchUsers } from "../users/users";
import { fetchUsersInxml } from "../users/usersInxml";
import { useApi } from "../use-api";
import xml2js from "xml2js";

export function useAllUsers() {
  const fetchusers = useApi(fetchUsers);
  const fetchusersInxml = useApi(fetchUsersInxml);
  const [users, setUsers] = useState(null);

  const parseXmlToJson = (data) => {
    
    const parser = new xml2js.Parser({ explicitArray: false });
    const xml = data[1];
    parser.parseString(xml, (err, result) => {
      if (err) {
        throw err;
      }
      const allUsers = [...data[0].person, ...result.Persons.person];
      const SortedUsers = allUsers.sort((a, b) => a.id - b.id);
      setUsers(SortedUsers);
    });
  };
  const fetchAllUsers = () => {
    Promise.all([fetchusers.request(), fetchusersInxml.request()]).then((data) => {
      parseXmlToJson(data);
    });
  };

  return {
    fetchAllUsers,
    users
  };
}
