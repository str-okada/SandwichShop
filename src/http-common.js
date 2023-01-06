import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8084",
  headers: { "content-type": "application.json" },
});