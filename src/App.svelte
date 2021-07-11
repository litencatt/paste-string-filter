<script lang="ts">
  import Pattern from './lib/Pattern.svelte'
  import Switch from './lib/Switch.svelte'
</script>

<main>
  <h1 class="title">📝 Paste string filter</h1>
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
    width: 300px;
    padding: 10px;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  .title {
    font-weight: 500;
    font-size: 1rem;
    padding: 0 0 0.5rem 0;
    margin-bottom: 0.5rem;
    border-bottom: solid 1px #cfd8dc;
  }

  .mb-1 {
    margin-bottom: 1rem;
  }
</style>
