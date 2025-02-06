<script lang="ts">
  import { onMount } from "svelte";
  import Footer from "$lib/Components/Layouts/Footer.svelte";
  import "../app.css";
  import Navbar from "../lib/Components/Layouts/Navbar.svelte";
  import { IsTokenExpired } from "$lib/Utils/Token";
  // import "../app.css";

  const load = async (): Promise<void> => {
    try {
      const token = localStorage.getItem('jwtToken');
      if (token && IsTokenExpired(token)) {
        localStorage.removeItem('jwtToken');
      }
    } catch (error) {
      console.error('Token validation error:', error);
    }
  };

  onMount(load);
</script>

<svelte:head>
  <!-- <slot /> -->
  <title>NDC Group 14 Notice Board</title>
</svelte:head>

<div class="flex flex-col min-h-screen bg-cover bg-center">
  <Navbar />

  <!-- Main Content Section -->
  <main class="flex-grow flex justify-center items-center">
    <slot />
  </main>

  <Footer />
</div>

<style>
    :global(html) {
        overflow-y: auto;
    }
</style>