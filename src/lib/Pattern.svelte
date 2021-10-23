<script lang="ts">
  import { onMount } from 'svelte'
  import { storageWrapper } from '../storageWrapper'
  import type { Combination } from '../interface'
  import {
    input,
    deleteButton,
    addButton,
    saveButton,
    gridContainer,
    gridItem,
    flexContainer,
    ContentArea,
  } from './style'

  let combinations: Combination[]
  let filteredStr: string

  const defaultFilteredString = '(filtered)'
  const defaultCombination: Combination[] = [
    {
      name: 'mail',
      regexp: '[\\w\\-._]+@[\\w\\-._]+\\.[A-Za-z]+',
      enable: true,
    },
  ]

  const getItems = async (): Promise<any> => {
    return await storageWrapper.get(['filteredStr', 'combinations'])
  }

  const handleSave = async (): Promise<void> => {
    await storageWrapper.set({
      combinations,
      filteredStr,
    })
  }

  const addClick = async (): Promise<void> => {
    const emptyRow: Combination = { name: '', regexp: '', enable: true }
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
    const reloadURL = window.location.href.includes('localhost')
      ? 'http://localhost:3000/dist/'
      : chrome.runtime.getURL('dist/index.html')
    window.location.href = reloadURL
  }

  onMount(async () => {
    const items = await getItems()
    filteredStr = items.filteredStr || defaultFilteredString
    combinations = items.combinations || defaultCombination
  })
</script>

<div class={ContentArea}>
  <p>Filtered word</p>
  <input class={input} id="filtered" bind:value={filteredStr} />
</div>
<div class={gridContainer}>
  <div class={gridItem}>Name</div>
  <div class={gridItem}>Regexp</div>
  <div class={gridItem} />
</div>
{#if combinations}
  {#each combinations as c, i}
    <div class={gridContainer}>
      <div class={gridItem}><input class={input} id="name" bind:value={c.name} /></div>
      <div class={gridItem}><input class={input} id="regexp" bind:value={c.regexp} /></div>
      <div class={gridItem}>
        <button type="button" class={deleteButton} on:click|preventDefault={() => delClick(i)}>DELETE</button>
      </div>
    </div>
  {/each}
{/if}
<div class={flexContainer}>
  <button type="button" class={saveButton} on:click|preventDefault={handleSave}>SAVE</button>
  <button type="button" class={addButton} on:click|preventDefault={addClick}>ADD</button>
</div>
