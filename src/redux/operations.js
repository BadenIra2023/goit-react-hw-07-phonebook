import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64cf8d42ffcda80aff51fb71.mockapi.io/";

export const fetchTasks = createAsyncThunk("contacts/fetchAll", async () => {
  const response = await axios.get("contacts");
  return console.log (response);
});