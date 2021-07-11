<script lang="ts">
  import { onMount } from 'svelte'
  import { storage } from '../storage'
  //import { storage } from '../localStorage'
  import Grid from './Grid.svelte'

  const getStatus = async (): Promise<boolean> => {
    // @ts-ignore
    return (await storage.get(['enable'])).enable
  }

  const setStatus = async (enable: boolean) => {
    storage.set({ enable })
  }

  const onChange: svelte.JSX.FormEventHandler<HTMLInputElement> = async (e) => {
    const checked = e.currentTarget.checked
    await setStatus(checked)
    status = await getStatus()
  }

  let status: boolean
  onMount(async () => {
    status = await getStatus()
  })
</script>

<Grid>
  <span slot="title">Feature</span>
  <label>
    <input checked={status} on:change={onChange} type="checkbox" name="status" value="enabled" /> Enabled
  </label>
</Grid>
