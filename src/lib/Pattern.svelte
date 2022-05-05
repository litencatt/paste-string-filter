<script lang="ts">
  import { onMount } from 'svelte'
  import Layout from './Layout.svelte'
  import Switch from './Switch.svelte'
  import { storageWrapper } from '../storageWrapper'
  import { exampleRegexps } from '../regexpPresets'
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
  let selected = [{ name: '', regexp: '', enable: true }]
  onMount(async () => {
    const items = await getItems()
    filteredStr = items.filteredStr || '(filtered)'
    combinations = items.combinations || [exampleRegexps[1]]
    selected = combinations
  })

  const getItems = async (): Promise<any> => {
    return await storageWrapper.get(['filteredStr', 'combinations'])
  }

  const saveClick = async (): Promise<void> => {
    await storageWrapper.set({
      combinations,
      filteredStr,
    })
  }

  const addClick = async (): Promise<void> => {
    const emptyRow: Combination = { name: '', regexp: '', enable: true }
    combinations = combinations.concat(emptyRow)
  }

  const delClick = async (index: number): Promise<void> => {
    combinations = combinations.filter((v, i) => {
      return i != index
    })
  }

  const enableChange = async (enable: boolean, index: number) => {
    combinations[index].enable = enable
  }

  const onChange = async (selectedItem: any, i: number): Promise<void> => {
    if (selectedItem === 'custom') {
      combinations[i] = { name: 'custom', regexp: '', enable: true }
    } else {
      // 選んだプリセットの正規表現をセット
      const setRegexp = exampleRegexps.find((r) => r.name == selectedItem)
      combinations[i] = setRegexp as Combination
      combinations[i].enable = true
    }
    console.log(combinations)
  }
</script>

<Layout>
  <span slot="title">Paste String Filter</span>
  <div class={ContentArea}>
    <p>Filtered word</p>
    <input class={input} id="filtered" bind:value={filteredStr} />
  </div>
  <div class={flexContainer}>
    <button type="button" class={saveButton} on:click|preventDefault={saveClick}>SAVE</button>
    <button type="button" class={addButton} on:click|preventDefault={addClick}>ADD</button>
  </div>
  <div class={gridContainer}>
    <div class={gridItem}>Enable</div>
    <div class={gridItem}>Preset</div>
    <div class={gridItem}>Name</div>
    <div class={gridItem}>Regexp</div>
    <div class={gridItem} />
  </div>
  {#if combinations}
    {#each combinations as c, i}
      <div class={gridContainer}>
        <div class={gridItem}>
          <Switch index={i} combination={c} handler={enableChange} />
        </div>
        <div class={gridItem}>
          <select bind:value={selected[i]} on:change={onChange(selected[i], i)}>
            {#each exampleRegexps as regexp}
              <option value={regexp.name}>{regexp.name}</option>
            {/each}
          </select>
        </div>
        <div class={gridItem}><input class={input} id="name" bind:value={c.name} /></div>
        <div class={gridItem}><input class={input} id="regexp" bind:value={c.regexp} /></div>
        <div class={gridItem}>
          <button type="button" class={deleteButton} on:click|preventDefault={() => delClick(i)}>DEL</button>
        </div>
      </div>
    {/each}
  {/if}
</Layout>
