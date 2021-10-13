<script lang="ts">
  import { onMount } from 'svelte'
  import { storageWrapper } from '../storageWrapper'
  import Layout from './Layout.svelte'

  let status = false

  const getStatus = async (): Promise<boolean> => {
    // @ts-ignore
    const res = (await storageWrapper.get(['enable'])).enable
    return res === 'true'
  }

  const setStatus = async (enable: boolean) => {
    await storageWrapper.set({ enable })
    status = enable
  }

  const onChange = async () => {
    await setStatus(status)
  }

  onMount(async () => {
    status = await getStatus()
  })
</script>

<Layout>
  <span slot="title">📝 Paste String Filter</span>
  <label>
    <input bind:checked={status} on:change={onChange} type="checkbox" name="status" />
    {status ? 'ON' : 'OFF'}
  </label>
</Layout>
