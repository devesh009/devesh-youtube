import axios from "axios";

const KEY = "AIzaSyATkmmnhvDL0pr1RtF4FRZd6O4biCCIraM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
