import axios from "axios";
import { w as writable } from "./index2.js";
const GetUrls = async () => {
  try {
    const response = await axios.get(
      "https://plural-ahead.pockethost.io/api/collections/ndcapp/records/nkudzbgd142g04y"
    );
    const apiData = response.data.App.api;
    let validUrl = "";
    for (let url of apiData) {
      try {
        const pingUrl = url + "/notices/";
        const statusResponse = await axios.get(pingUrl);
        if (statusResponse.status === 200) {
          console.log(`URL ${url} is reachable!`);
          return url;
        }
      } catch (error) {
        console.error(`Error fetching URL ${url}:`, error);
      }
    }
    return validUrl;
  } catch (error) {
    console.error("Error fetching the initial API data:", error);
    return "";
  }
};
const URL = GetUrls();
const BASE_URL = writable(URL);
export {
  BASE_URL as B
};
