import client from "../client";

export const fetchUsersInxml = () => client.get("/usersxml",{baseURL:"https://userdemo-api.free.beeceptor.com"});

