<script lang="ts">
  import Grid from './Grid.svelte'
</script>

<Grid>
  <span slot="title">Pattern</span>
  <div class="inputWrap"><input class="input" /></div>
  <div><button class="save" disabled>Save</button></div>
</Grid>

<style>
  .inputWrap {
    margin-bottom: 0.25rem;
  }
  .input {
    display: block;
    width: 100%;
  }
  .save {
    display: block;
    margin-left: auto;
    margin-right: 0;
  }
</style>
