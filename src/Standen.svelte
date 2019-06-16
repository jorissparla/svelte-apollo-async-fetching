<script>
  import { getClient, query } from "svelte-apollo";
  import { fade, scale } from "svelte/transition";
  import { client, ALL_STANDEN } from "./apollo";
  import Meter from "./Meter.svelte";
  import Header from "./Header.svelte";
  import Spinner from "./Spinner.svelte";
  $: fullname = "Amel Beit";
  $: standen = [];
  // import ApolloClient, { gql } from "apollo-boost";

  // 2. Get the Apollo client from context
  // const client = getClient();

  // 3. Execute the GET_BOOKS graphql query using the Apollo client
  //    -> Returns a svelte store of promises that resolve as values come in

  async function getStanden() {
    const astanden = await query(client, { query: ALL_STANDEN });
    const result = await astanden.result();
    console.log(result);
    standen = result.data.allStandens.reverse();
    return result.data.allStandens;
  }

  getStanden();
  //   console.log(accounts);
</script>

<style>
  .main {
    position: absolute;
    top: 0;
    background: #ededed;

    width: 100%;
    height: 100%;
    margin-top: 5rem;
  }
  .card {
    display: grid;
    grid-template-columns: 10fr 3fr;
    grid-template-rows: 1fr 2fr 1fr;
    width: 300px;
    height: 150px;
    box-shadow: lightgrey 1px 1px 1px 1px;
    border-width: 1px;
    border-style: solid;
    border-color: lightgrey;
    border-image: initial;
    background: white;
    border-radius: 5px;
    padding: 8px;
    margin: 0px 20px 20px 0px;
    background: var(--nice-gradient);
  }

  .card:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transition: all 0.3s;
    transform: translateZ(10px);
  }
  .title {
    font-size: 16px;
    display: flex;
    justify-content: space-around;
    grid-column: 1 / auto;
    grid-row: 1 / auto;
  }
  @media (min-width: 768px) {
    #standengrid {
      grid-template-columns: repeat(3, 2fr);
    }
  }
  #standengrid {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    background: #ededed;
    font-family: Roboto;
  }
  .bottom {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    grid-column: 1 / 2;
    grid-row: 3 / auto;
    letter-spacing: 0.2rem;
  }
  .mid {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    grid-column: 1 / 2;
    grid-row: 2 / auto;
  }
</style>

<Header />
<div class="main">
  {#if !standen}
    <!-- content here -->
    <Spinner />
  {:else}{standen.length} Standen{/if}
  <!-- else content here -->
  <div id="standengrid">
    {#each standen as stand}
      <!-- content here -->
      <div class="card" in:fade={{ duration: 500 }}>
        <h3 class="title">
           {new Date(stand.created).toLocaleDateString('nl')}
        </h3>
        <div class="mid">
          <Meter value={stand.value} />
        </div>
        <div class="bottom">{stand.type}</div>
      </div>
    {/each}
  </div>
</div>
