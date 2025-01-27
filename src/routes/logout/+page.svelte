<script>
    import { goto } from "$app/navigation";
    import { BASE_URL } from "$lib/stores/api";
    let API_URL = "";

    $: API_URL = $BASE_URL
    goto('/login');
</script>