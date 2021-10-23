<script lang="ts">
  import { onMount } from 'svelte'
  import { storageWrapper } from '../storageWrapper'
  import type { Combination } from '../interface'
  import { input, delete_button, add_button } from './style'

  let combinations: Combination[]
  let filteredStr: string

  const defaultFilteredString = '(filtered)'
  const defaultCombination = [
    {
      name: 'mail',
      regexp: '[\\w\\-._]+@[\\w\\-._]+\\.[A-Za-z]+',
      enable: true,
    },
  ]

  const getItems = async (): Promise<any> => {
    return await storageWrapper.get(['filteredStr', 'combinations'])
  }

  const handleClick = async (): Promise<void> => {
    await storageWrapper.set({
      combinations: combinations,
      filteredStr: filteredStr,
    })
  }

  const addClick = async (): Promise<void> => {
    const emptyRow = { name: '', regexp: '', enable: true }
    combinations.push(emptyRow)
    await storageWrapper.set({ combinations: combinations })
    reloadPopup()
  }

  const delClick = async (index: number): Promise<void> => {
    combinations.splice(index, 1)
    await storageWrapper.set({ combinations: combinations })
    reloadPopup()
  }

  const reloadPopup = function () {
    let reloadURL: string
    if (window.location.href.includes('localhost')) {
      reloadURL = 'http://localhost:3000/dist/'
    } else {
      reloadURL = chrome.runtime.getURL('dist/index.html')
    }
    window.location.href = reloadURL
  }

  onMount(async () => {
    const items = await getItems()
    filteredStr = items.filteredStr || defaultFilteredString
    combinations = items.combinations || defaultCombination
  })
</script>

<div>
  <span>Filtered word</span><br />
  <input class={input} id="filtered" bind:value={filteredStr} />
</div>
<div>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Regexp</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {#if combinations}
        {#each combinations as c, i}
          <tr>
            <td>
              <input class={input} id="name" bind:value={c.name} />
            </td>
            <td>
              <input class={input} id="regexp" bind:value={c.regexp} />
            </td>
            <td>
              <button type="button" class={delete_button} on:click|preventDefault={() => delClick(i)}> DELETE </button>
            </td>
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
  <button type="button" class={add_button} on:click={addClick}>ADD</button>
</div>
