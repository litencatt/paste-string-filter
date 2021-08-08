<script lang="ts">
  import { onMount } from 'svelte'
  import { storageWrapper } from '../storageWrapper'

  import Grid from './Grid.svelte'

  const getStatus = async (): Promise<boolean> => {
    // @ts-ignore
    return (await storageWrapper.get(['enable'])).enable
  }

  const setStatus = async (enable: boolean) => {
    storageWrapper.set({ enable })
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
