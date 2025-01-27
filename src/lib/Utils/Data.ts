import axios from "axios";

// Define the type for the API response
interface ApiResponse {
    App: {
        api: string[];
    };
}

const GetUrls = async (): Promise<string>  => {
    try {
        // Fetch the initial API data
        const response = await axios.get<ApiResponse>(
            "https://plural-ahead.pockethost.io/api/collections/ndcapp/records/nkudzbgd142g04y"
        );

        // Extract the URLs from the response
        const apiData = response.data.App.api;

        // Initialize an array to store valid URLs
        let validUrl: string = "";

        // Loop through each URL and check its status code
        for (let url of apiData) {
            try {                
                const pingUrl = url + "/notices/"
                const statusResponse = await axios.get(pingUrl);

                // Check if the status is 200 (OK)
                if (statusResponse.status === 200) {
                    console.log(`URL ${url} is reachable!`);
                    return url; // Return the first valid URL   
                }
            } catch (error) {
                // Handle the case where the URL doesn't return a 200 status code
                console.error(`Error fetching URL ${url}:`, error);
            }
        }

        // Return all valid URLs
        return validUrl;
    } catch (error) {
        console.error("Error fetching the initial API data:", error);
        return "";
    }
};



export default GetUrls;
