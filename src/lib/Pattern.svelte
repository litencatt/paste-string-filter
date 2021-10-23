<script lang="ts">
  import { onMount } from 'svelte'
  import { storageWrapper } from '../storageWrapper'
  import type { Regexp } from '../interface'
  import { input, delete_button, add_button, save_button } from './style'

  const defaultFilteredString = '(filtered)'
  const defaultRegExp = [
    {
      name: 'mail',
      regexp: '[\\w\\-._]+@[\\w\\-._]+\\.[A-Za-z]+',
      enable: true,
    },
  ]

  const getItems = async (): Promise<any> => {
    return await storageWrapper.get(['filteredStr', 'regexps'])
  }

  const handleClick = async (): Promise<void> => {
    await storageWrapper.set({
      regexps: regexps,
      filteredStr: filteredStr,
    })
  }

  const addClick = async (): Promise<void> => {
    const emptyRow = { name: '', regexp: '', enable: true }
    regexps.push(emptyRow)
    await storageWrapper.set({ regexps: regexps })
    reloadPopup()
  }

  const delClick = async (index: number): Promise<void> => {
    regexps.splice(index, 1)
    await storageWrapper.set({ regexps: regexps })
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

  let regexps: Regexp[]
  let filteredStr: string
  onMount(async () => {
    const items = await getItems()
    filteredStr = items.filteredStr || defaultFilteredString
    regexps = items.regexps || defaultRegExp
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
      {#if regexps}
        {#each regexps as regexp, i}
          <tr>
            <td>
              <input class={input} id="name" bind:value={regexp.name} />
            </td>
            <td>
              <input class={input} id="regexp" bind:value={regexp.regexp} />
            </td>
            <td>
              <button class={delete_button} on:click|preventDefault={() => delClick(i)}> DELETE </button>
            </td>
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
  <button class={add_button} on:click={addClick}>ADD</button>
</div>
