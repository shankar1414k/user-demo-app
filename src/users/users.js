import client from "../client";

export const fetchUsers = () => client.get("/users", {baseURL:"https://userdemo-api.free.beeceptor.com"});

