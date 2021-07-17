<script lang="ts">
  import { onMount } from 'svelte'
  import Grid from './Grid.svelte'
  import { storage } from '../storage'
  //import { storage } from '../localStorage'
  import type { Regexp } from '../interface'

  const getRegexps = async (): Promise<Regexp[]> => {
    const t = await storage.get(['regexps'])
    // @ts-ignore
    return t.regexps
  }

  const handleClick = async (): Promise<void> => {
    await storage.set({ regexps: regexps })
  }

  let regexps: Regexp[]
  onMount(async () => {
    regexps = await getRegexps()
  })
</script>

<div class="container">
  <span class="title text-base m-1">Patterns</span>
  <table class="table-fixed">
    <thead>
      <tr>
        <th class="border border-gray-300 text-left px-2">Name</th>
        <th class="border border-gray-300 text-left px-2">Regexp</th>
      </tr>
    </thead>
    <tbody>
      {#if regexps}
        {#each regexps as regexp}
          <tr>
            <td class="border border-gray-300	px-2 py-1">
              <input class="px-2 py-1 border border-gray-300	rounded" id="name" bind:value={regexp.name} />
            </td>
            <td class="border border-gray-300	px-2 py-1">
              <input class="px-2 py-1 border border-gray-300	rounded" id="regexp" bind:value={regexp.regexp} />
            </td>
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
  <div class="my-1 item-right ">
    <button class="px-2 py-1 bg-blue-400 text-white rounded hover:bg-blue-500" on:click={handleClick}> Save </button>
  </div>
</div>
