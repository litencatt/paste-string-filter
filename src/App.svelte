<script lang="ts">
  import Pattern from './lib/Pattern.svelte'
  import Switch from './lib/Switch.svelte'
</script>

<main>
  <div class="mb-1"><Switch /></div>
  <div><Pattern /></div>
</main>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body) {
    color: #455a64;
    width: 460px;
    padding: 10px;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  .mb-1 {
    margin-bottom: 1rem;
  }
</style>
