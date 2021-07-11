<script lang="ts">
  import { onMount } from 'svelte'
  import Grid from './Grid.svelte'
  import { storage } from '../storage'
  //import { storage } from '../localStorage'
  import type { Regexp } from '../interface'

  const getRegexps = async (): Promise<boolean> => {
    // @ts-ignore
    return await storage.get(['regexps'])
  }

  const handleClick = async (): Promise<void> => {
    await storage.set({ regexps: regexps })
  }

  let tmp: any
  let regexps: Regexp[] = []
  onMount(async () => {
    tmp = await getRegexps()
    regexps = tmp.regexps
  })
</script>

<Grid>
  <span slot="title">Patterns</span>
  {#each regexps as regexp}
    <ul>
      <div class="inputWrap">
        <input class="input" id="name" bind:value={regexp.name} />
        <input class="input" id="regexp" bind:value={regexp.regexp} />
        <div />
      </div>
    </ul>
  {/each}
  <div><button class="save" on:click={handleClick}>Save</button></div>
</Grid>

<style>
  .inputWrap {
    margin-bottom: 0.25rem;
    display: inline-flex;
  }
  .input {
    display: block;
    width: 70%;
  }
  .input#name {
    width: 30%;
  }
  .save {
    display: block;
    margin-left: auto;
    margin-right: 0;
  }
</style>
