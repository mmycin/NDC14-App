<script>
    // @ts-nocheck
    import { goto } from "$app/navigation";

    localStorage.removeItem("jwtToken")
    goto('/login');
</script>