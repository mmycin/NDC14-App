<script>
    // @ts-nocheck
    import axios from "axios";
    import { onMount } from "svelte";
    import { adminsStore } from "$lib/Utils/Store"; // Import the store
    import { BASE_URL } from "$lib/stores/api";

    let admins = [];
    let latestBatchUsers = [];
    let secondLatestBatchUsers = [];
    let isLoading = true; // Loading state for both batches
    let API_URL = "";

    // Reactive assignment of API_URL from BASE_URL store
    $: API_URL = $BASE_URL;

    const fetchUsers = async () => {
        isLoading = true;

        // Step 1: Try loading from localStorage
        const storedAdmins = localStorage.getItem("admins");

        if (storedAdmins) {
            admins = JSON.parse(storedAdmins);
            isLoading = false;
            console.log("Loaded admins from localStorage:", admins);
        } else {
            console.log("No admins in localStorage, will fetch from API.");
        }

        // Display initial data (even if it's from localStorage) while fetching fresh data
        displayAdmins(admins); // Display function for your frontend (optional)

        try {
            (async function () {
                // Step 2: Fetch data from API
                const response = await axios.get(`${await API_URL}/users/`);
                const newAdmins = response.data.data;
                console.log("Fetched admins from API:", newAdmins);

                // Step 3: Check if the fetched data is different from the stored data
                if (JSON.stringify(admins) !== JSON.stringify(newAdmins)) {
                    console.log(
                        "Data has changed, updating localStorage and view."
                    );
                    admins = newAdmins;
                    localStorage.setItem("admins", JSON.stringify(admins));
                    displayAdmins(admins); // Update the view with new data
                }
            })();
        } catch (error) {
            console.error("Error fetching admins from API:", error);
        } finally {
            isLoading = false;
        }

        // Handle batch filtering after fetching new data
        const uniqueBatches = [
            ...new Set(admins.map((user) => user.batch)),
        ].sort((a, b) => b - a); // Sort batches in descending order

        const [maxBatch, secondMaxBatch] = uniqueBatches;

        latestBatchUsers = admins.filter((user) => user.batch === maxBatch);
        secondLatestBatchUsers = admins.filter(
            (user) => user.batch === secondMaxBatch
        );

        console.log("Latest Batch Users:", latestBatchUsers);
        console.log("Second Latest Batch Users:", secondLatestBatchUsers);
    };

    // Function to display admins (optional, just to visualize the data)
    const displayAdmins = (admins) => {
        console.log("Displaying admins:", admins);
        // You could update your state or frontend framework here to show the admins.
    };

    onMount(() => {
        fetchUsers();
    });
</script>

<section
    class="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-100 py-16 px-6 w-full flex flex-col items-center"
>
    <h1
        class="text-4xl font-extrabold text-center mb-6 text-white leading-tight"
    >
        Captains of Batch {latestBatchUsers[0]?.batch || ""}
    </h1>
    <p class="text-center text-gray-400 mb-8">
        For any help, please contact the captains of the group-14
    </p>

    {#if isLoading}
        <div class="flex justify-center items-center py-10">
            <div class="loader"></div>
        </div>
    {:else}
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center items-center"
        >
            {#each latestBatchUsers as user}
                <div
                    class="bg-gray-800 hover:bg-gray-700 transition-colors duration-300 shadow-lg rounded-xl p-6 flex flex-col items-center space-y-4 transform hover:scale-105 hover:shadow-2xl"
                >
                    <h2 class="text-xl font-semibold text-white">
                        {user.fullName}
                    </h2>
                    <p class="text-sm text-gray-300">
                        <i class="fas fa-envelope mr-2"></i>Email:
                        <a
                            href="mailto:{user.email}"
                            class="text-blue-400 hover:underline"
                            >{user.email}</a
                        >
                    </p>
                    <p class="text-sm text-gray-400">
                        <i class="fas fa-id-card mr-2"></i>Roll: {user.roll}
                    </p>
                    <p class="text-sm text-gray-400">
                        <i class="fas fa-phone-alt mr-2"></i>Phone:
                        <a
                            href={`tel:${user.phone}`}
                            target="_blank"
                            class="text-blue-400 hover:underline"
                        >
                            {user.phone.startsWith("+88")
                                ? user.phone
                                : "+88" + user.phone}
                        </a>
                    </p>
                    <a
                        href={user.fbLink}
                        target="_blank"
                        class="text-blue-400 hover:underline"
                    >
                        <i class="fab fa-facebook mr-2"></i>Facebook Profile
                    </a>
                </div>
            {/each}
        </div>
    {/if}
</section>

{#if secondLatestBatchUsers.length > 0}
    <section
        class="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-100 py-16 px-6 w-full flex flex-col items-center"
    >
        <h1
            class="text-4xl font-extrabold text-center mb-6 text-white leading-tight"
        >
            Captains of Batch {secondLatestBatchUsers[0]?.batch || ""}
        </h1>
        <p class="text-center text-gray-400 mb-8">
            For any help, please contact the captains of the group-14
        </p>

        {#if isLoading}
            <div class="flex justify-center items-center py-10">
                <div class="loader"></div>
            </div>
        {:else}
            <div
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center items-center"
            >
                {#each secondLatestBatchUsers as user}
                    <div
                        class="bg-gray-800 hover:bg-gray-700 transition-colors duration-300 shadow-lg rounded-xl p-6 flex flex-col items-center space-y-4 transform hover:scale-105 hover:shadow-2xl"
                    >
                        <h2 class="text-xl font-semibold text-white">
                            {user.fullName}
                        </h2>
                        <p class="text-sm text-gray-300">
                            <i class="fas fa-envelope mr-2"></i>Email:
                            <a
                                href="mailto:{user.email}"
                                class="text-blue-400 hover:underline"
                                >{user.email}</a
                            >
                        </p>
                        <p class="text-sm text-gray-400">
                            <i class="fas fa-id-card mr-2"></i>Roll: {user.roll}
                        </p>
                        <p class="text-sm text-gray-400">
                            <i class="fas fa-phone-alt mr-2"></i>Phone:
                            <a
                                href={`tel:${user.phone}`}
                                target="_blank"
                                class="text-blue-400 hover:underline"
                            >
                                {user.phone.startsWith("+88")
                                    ? user.phone
                                    : "+88" + user.phone}
                            </a>
                        </p>
                        <a
                            href={user.fbLink}
                            target="_blank"
                            class="text-blue-400 hover:underline"
                        >
                            <i class="fab fa-facebook mr-2"></i>Facebook Profile
                        </a>
                    </div>
                {/each}
            </div>
        {/if}
    </section>
{/if}

<style>
    section {
        font-family: "Inter", sans-serif;
    }

    h1 {
        color: #f3f4f6;
    }

    div {
        transition:
            transform 0.3s,
            box-shadow 0.3s ease-in-out;
    }

    div:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 25px rgba(0, 0, 0, 0.2);
    }

    /* Loader styling */
    .loader {
        border: 4px solid rgba(255, 255, 255, 0.2);
        border-top: 4px solid #ffffff;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        animation: spin 1.2s linear infinite;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
