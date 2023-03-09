<script lang="ts">
    import type { LayoutServerData } from "./$types";
    export let data: LayoutServerData;
</script>

<nav>
    {#if data?.userid}
        <a href="/">Home</a>
        <a href="/settings">Settings</a>
    {:else}
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    {/if}

</nav>

<slot />
