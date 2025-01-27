<script>
    // @ts-nocheck
    import { goto } from "$app/navigation";
    import axios from "axios";
    import { getID } from "$lib/Utils/Token";
    import { onMount } from "svelte";
    import { BASE_URL } from "$lib/stores/api";

    let ID = 0;
    let data = {};
    let isLoading = true;
    let API_URL = "";

    $: API_URL = $BASE_URL

    onMount(async () => {
        try {
            const token = localStorage.getItem("jwtToken");
            if (!token) {
                goto("/login");
            } else {
                const userID = getID(token);
                ID = userID;

                // Fetch user data
                const response = await axios.get(
                    `${(await API_URL).toString()}/users/id/${ID}`
                );
                data = await response.data.data;
                isLoading = false;
            }
        } catch (error) {
            console.error(error);
            isLoading = false;
        }
    });

    // Define the goBack function
    function goBack() {
        window.history.back();
    }
</script>

<div class="min-h-screen bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
        <!-- Profile Header -->
        <div
            class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-t-2xl p-8 shadow-2xl text-center relative border border-gray-800"
        >
            <h1 class="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                Profile
            </h1>

            {#if data.isAdmin}
                <div
                    class="absolute top-4 right-4 px-3 py-1.5 bg-gray-950 text-sm font-semibold text-yellow-400 rounded-full border border-yellow-400/20 flex items-center gap-1.5"
                >
                    <span class="text-yellow-400">☆</span> Admin
                </div>
            {/if}

            <p class="text-gray-400 mt-2">Your account details</p>
        </div>

        {#if isLoading}
            <div class="bg-gray-900 p-8 rounded-b-2xl shadow-2xl border border-gray-800">
                <div class="animate-pulse space-y-4">
                    {#each Array(6) as _}
                        <div class="h-4 bg-gray-800 rounded w-3/4"></div>
                    {/each}
                </div>
            </div>
        {:else}
            <!-- Profile Details -->
            <div class="bg-gray-900 p-6 rounded-b-2xl shadow-2xl border border-gray-800 space-y-6">
                <!-- Full Name -->
                <div
                    class="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-800"
                >
                    <span class="text-gray-400 w-full sm:w-1/3 mb-2 sm:mb-0"
                        >Name</span
                    >
                    <span class="text-white font-medium text-lg"
                        >{data.fullName || "N/A"}</span
                    >
                </div>

                <!-- Username -->
                <div
                    class="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-800"
                >
                    <span class="text-gray-400 w-full sm:w-1/3 mb-2 sm:mb-0"
                        >Username</span
                    >
                    <span class="text-white font-medium text-lg"
                        >{data.username || "N/A"}</span
                    >
                </div>

                <!-- Email -->
                <div
                    class="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-800"
                >
                    <span class="text-gray-400 w-full sm:w-1/3 mb-2 sm:mb-0"
                        >Email</span
                    >
                    <a
                        href="mailto:{data.email}"
                        class="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg"
                    >
                        {data.email || "N/A"}
                    </a>
                </div>

                <!-- Roll Number -->
                <div
                    class="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-800"
                >
                    <span class="text-gray-400 w-full sm:w-1/3 mb-2 sm:mb-0"
                        >Roll Number</span
                    >
                    <span class="text-white font-medium text-lg"
                        >{data.roll || "N/A"}</span
                    >
                </div>

                <!-- Phone Number -->
                <div
                    class="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-800"
                >
                    <span class="text-gray-400 w-full sm:w-1/3 mb-2 sm:mb-0"
                        >Phone Number</span
                    >
                    <span class="text-white font-medium text-lg"
                        >{data.phone.startsWith("+88")
                            ? data.phone
                            : "+88" + data.phone || "N/A"}</span
                    >
                </div>

                <!-- Batch -->
                <div
                    class="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-800"
                >
                    <span class="text-gray-400 w-full sm:w-1/3 mb-2 sm:mb-0"
                        >Batch</span
                    >
                    <span class="text-white font-medium text-lg"
                        >{data.batch || "N/A"}</span
                    >
                </div>

                <!-- Facebook Profile -->
                <div class="flex flex-col sm:flex-row sm:items-center py-4">
                    <span class="text-gray-400 w-full sm:w-1/3 mb-2 sm:mb-0"
                        >Facebook Profile</span
                    >
                    <a
                        href={data.fbLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg truncate"
                    >
                        {data.fbLink || "N/A"}
                    </a>
                </div>
            </div>
        {/if}

        <!-- Action Buttons -->
        <div
            class="text-center mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:gap-6"
        >
            <!-- Go Back Button -->
            <button
                on:click={goBack}
                class="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transform transition-all duration-200 ease-in-out w-full sm:w-auto"
            >
                Go Back
            </button>

            <!-- Edit Button -->
            <button
                on:click={() => goto("/dashboard/account/edit")}
                class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transform transition-all duration-200 ease-in-out w-full sm:w-auto"
            >
                Edit Profile
            </button>
        </div>
    </div>
</div>