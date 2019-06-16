<script>
  export let value;
  let numbers = value
    .toString()
    .padStart(7, "0")
    .split("");
</script>

<style>
  .cipher {
    border-width: 1px;
    border-style: solid;
    border-color: black;
    border-image: initial;
    border-radius: 2px;
    margin: 1px;
    font-weight: 400;
    color: purple;
    padding: 0.1rem;
  }
  .box {
    font-weight: 900;
    display: flex;
    flex-direction: row;
  }
</style>

<h3 class="box">
  {#each numbers as number}
    <!-- content here -->
    <div class="cipher">{number}</div>
  {/each}
</h3>
