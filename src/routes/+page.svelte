<script>
    export let form;
</script>

<h1>Welcome to Tennis game</h1>

{#if form?.error}
  <p class="error">{form.error}</p>
{/if}
<form method="post" action="?/loginFast">
    <label for="username">Enter username:</label>
    <input id="username" name="username" type="text" required/>
    <button type="submit">Submit</button>
</form>

<div>Explan the purpose of the website</div>
<div>Explain the rules of the game</div>
<div>Information about the author</div>

<style>
    form {
      display: flex;
      flex-direction: column;
      width: 300px;
      margin: auto;
    }
    label, input {
      margin: 10px 0;
    }
</style>
