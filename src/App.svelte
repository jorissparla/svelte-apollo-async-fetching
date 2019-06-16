<script>
  export let name = "Piet";
  import { client } from "./apollo";

  import { setClient } from "svelte-apollo";
  import Standen from "./Standen.svelte";
  // import Accounts from "./Accounts.svelte";
  // // import Books from './Books.svelte';

  // // 1. Create an Apollo client and pass it to all child components
  // //    (uses svelte's built-in context)

  setClient(client);
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name}!</h1>
<Standen />
<!-- <Accounts /> -->
