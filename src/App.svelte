<script lang="ts">
  import Pattern from './lib/Pattern.svelte'
</script>

<main>
  <Pattern />
</main>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body) {
    background-color: #f5f5f5;
    color: #808080;
    width: 460px;
    padding: 10px;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
</style>
