<script lang="ts">
  import type { Combination } from '../interface'

  export let index: number
  export let combination: Combination
  export let handler: (enable: boolean, index: number) => void

  const onChange: svelte.JSX.FormEventHandler<HTMLInputElement> = async (e) => {
    handler(e.currentTarget.checked, index)
  }
</script>

<input type="checkbox" name="status" checked={combination.enable} on:change={onChange} />
