<script>
    export let data;
</script>

<h1>Welcome to Tennis game</h1>

<form method="post" action="?/create">
    <label for="uname">Enter username:
        <input id="uname" type="text" placeholder="DragonWarrior"/>
    </label>
    <button type="submit">Submit</button>
</form>

<br>
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
