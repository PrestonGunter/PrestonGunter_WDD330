
import {Auth} from './auth';
import { Errors, makeRequest } from "./authHelper";
makeRequest("login", "POST", {
  password: "user1",
  email: "user1@email.com",
});

const loginForm = document.getElementById('login');

loginForm.querySelector('button').addEventListener('click', () => {
  myAuth.login(getPosts);
});