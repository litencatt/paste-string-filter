<script lang="ts">
  import Pattern from './lib/Pattern.svelte'
  import Switch from './lib/Switch.svelte'
</script>

<main>
  <Switch />
  <Pattern />
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
</style>
