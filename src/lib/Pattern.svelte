<script lang="ts">
  import { onMount } from 'svelte'
  import { storage } from '../storage'
  import type { Regexp } from '../interface'

  const getItems = async (): Promise<any> => {
    return await storage.get(['filteredStr', 'regexps'])
  }

  const handleClick = async (): Promise<void> => {
    await storage.set({
      regexps: regexps,
      filteredStr: filteredStr,
    })
  }

  let regexps: Regexp[]
  let filteredStr: string
  onMount(async () => {
    const items = await getItems()
    filteredStr = items.filteredStr
    regexps = items.regexps
  })
</script>

<div class="container my-1">
  <span class="title text-base m-1">Filtered string</span><br />
  <input class="px-2 py-1 border border-gray-300 rounded" id="filtered" bind:value={filteredStr} />
</div>
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
