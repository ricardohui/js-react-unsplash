import axios from "axios";

const apiKey =
  "9a9b19db18019a388a937d265b50f468b527643c3fe499fefbe89dc359038dd2";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID " + apiKey
  }
});
