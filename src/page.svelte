<script lang="ts">
    export let data;
</script>

<div>
    {#each data.cart as { id, quantity } (id)}
        <div>{id} - {quantity}</div>
    {/each}
</div>
