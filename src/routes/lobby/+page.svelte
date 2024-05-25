<script>
    export let data;
</script>

<h1>Welcome to Tennis game</h1>

{#if data?.user}
    <p>User: {data.user}</p>
{/if}

<div class="gameMenuBar">
    <!-- 
        <div class="Matchmaking">Matchmaking</div> 
        <div class="PlayWithFriend">2 players mode</div>
        <div class="PlayWithComputer">Play with ML powered Computer</div>
    -->
    <div class="DevelopmentMode">Development mode</div>
</div>

<div class="Spectate">Spectate matches</div>
