<script>
  import { getClient, query } from "svelte-apollo";
  import { client, GET_ACCOUNTS } from "./apollo";
  $: fullname = "Amel Beit";
  let results = [];
  // import ApolloClient, { gql } from "apollo-boost";

  // 2. Get the Apollo client from context
  // const client = getClient();

  // 3. Execute the GET_BOOKS graphql query using the Apollo client
  //    -> Returns a svelte store of promises that resolve as values come in
  const accounts = query(client, { query: GET_ACCOUNTS });
  let data;

  let x = getAccounts();

  async function getAccounts() {
    const res = await query(client, { query: GET_ACCOUNTS });
    console.log(res.result());
    return res;
  }

  x.then(y => y.result().then(res => console.log(res.data)));

  console.log({ x });
  async function LoadQuery() {
    data = await client.query({ query: GET_ACCOUNTS });
    results = data.data.accounts.filter(o => o.fullname.indexOf(fullname) >= 0);
    console.log(results);
  }

  console.log(accounts);
</script>

<button on:click={LoadQuery}>Query</button>
<div>{results.length} results</div>
<input bind:value={fullname} on:keydown={LoadQuery} />
<h2>{fullname}</h2>
<!-- <!-- 4. Use $accounts (note the "$"), to subscribe to query values -->
{#await $accounts}
  Loading...
{:then result}

  {#each results as account}
    <li>{account.fullname}</li>
  {/each}
{:catch error}
  Error: {error}
{/await}
