<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300&family=Oxygen:wght@300&family=Source+Sans+Pro:wght@300&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@700&family=Play:wght@700&display=swap" rel="stylesheet">
<script lang="ts">
	import type { ActionData, PageData } from "./$types";

	export let form: ActionData;
	export let data: PageData;
	var username = "",password = ""
	function avbryt() {
		data.authenticator = false;
		data.username = " ";
		data.password = " ";
	}
</script>
<style>
   :root {
    --green: rgb(56, 178, 77);
    --red: rgb(255, 30, 0);
  --grey: hsl(0 0% 45%);
  --validconfirm: rgb(243,239,105);
  --valid: var(--green);
  --invalid: var(--red);
  --color: var(--grey);
}
    * {
        padding: 0;
        margin: 0;
        overflow: hidden;
    }
    body {
        display: flex;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: black;
    }
    .holder-border {
       position: absolute;
       width: 350px;
       height: 450px;
       background: linear-gradient(124deg, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
       background-size: 100% 1800%;
       left: 50%;
       top: 50%;
       transform:translate(-50%, -50%);
       animation: rainbow 18s ease infinite;
       border-radius: 15px;
	   z-index: 2;
}
.holder {
       position: absolute;
       width: 340px;
       height: 370px; 
       background-color: black;
       left: 50%;
       top: 43%;
       transform:translate(-50%, -50%);
       animation: rainbow 18s ease infinite;
       border-radius: 15px;
}

.authenticator {
	display: flex;
	position: absolute;
	width: calc(385px * 0.885);
	height: calc(585px * .1);
	top: 92.6%;
	left: 50%;
	transform:translate(-50%,-50%);
	border-bottom-left-radius: 16px;
	border-bottom-right-radius: 16px;
}
.authfield {
	position: absolute;
background-color: transparent;
border: 2px solid white;
border-radius: 3px;
height: 40%;
width: 75%;
left: 2%;
top: 40%;
}

.authbutton {
	position: absolute;
	height: 30px;
	width: 50px;
	border: 1px solid black;
	background-color: gray;
	left: 80%;
	top: 40%;
}
.avbrytauth {
	position: absolute;
	height: 20px;
	width: 20px;
	font-size: 17px;
	left: 2%;
	top: 1%;
	color: red;
	cursor:pointer;

}
.unableaccess-form {
	position: absolute;
	background-color: transparent;
       width: 340px;
       height: 370px; 
       left: 50%;
	   border: 0px solid red;
       top: 43%;
       transform:translate(-50%, -50%);
       border-radius: 15px;
	   z-index: 3000;
}
.unableaccess-form:hover {
	background-color: rgba(255, 119, 119, 0.418)
}
.authfield:focus {
	font-size: 14px;
	color: black;
	text-align: center;
	outline: 0.5px solid grey;
	
}
.userpass-input:has(:invalid), .userpass-input:has(:invalid:focus), .user-input:has(:invalid), .user-input:has(:invalid:focus) {
--color: var(--invalid)
}
.user-input:has(:placeholder-shown), .userpass-input:has(:placeholder-shown) {
  --color: var(--grey);
}
 .user-input:has(:valid), .userpass-input:has(:valid) {
--color: var(--valid)
}

input::placeholder {
  color: transparent;
}
form:valid [type="submit"] {
  background-color: rgb(0,128,0);
  cursor: pointer;
}
.loggain {
    position: absolute;
    color: white;
    font-size: 31.3px;
    left: 50%;
    top: 11%;
    transform:translate(-50%);
    font-family: 'Archivo', sans-serif;
}

.lösenord, .användarnamn{
    position: absolute;
    left: 50%;
    transform:translate(-50%);
    background-color: transparent;
    border: 3px solid var(--color, #ccc);
    border-radius: 3px;
    height: 25px;
    width: 250px;
    color: white;
    text-align: center;
}
.användarnamn::placeholder {
color: white;
}
.lösenord::placeholder {
color: white;
}

h3, h4 {
    color: white;
}
h3 {
    position: absolute;
    font-size: 15px;
    left: 13%;
}

h4 {
    position: absolute;
    font-size: 10px;
    left: 13%;
    font-family: 'Oxygen', sans-serif;
    color: gray;
}

.logga-in {
    position: absolute;
    left: 50%;
    transform:translate(-50%);
    width: 210px;
    height: 40px;
    border-radius: 20px;
    background-color: gray;
    z-index: 1001;
    outline: none;
}
.logga-in:hover {
    background-color: rgb(117, 115, 115)
}
.logga-in-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%, -50%);
    font-family: 'Archivo', sans-serif;
}
p {
    color: white;

}
@keyframes rainbow { 
    0% {
        background-position:0% 82%
    }
    50% {
        background-position:100% 19%
    }
    100% {
        background-position:0% 82%
    }
}
</style>
<body>
<div class="holder-border">
    <div class="holder" style="height: {data.authenticator ? "370px" : "440px"}; top: {data.authenticator ? "43%" : "50%"}">
        <h1 style="position: absolute; color: red; font-size: 13px; font-family: 'Source Sans Pro', sans-serif; top: {data.authenticator ? "44.5%" : "40.5%"}; left: 49%; ">{data.noUsername? "Username does not exist" : ""}</h1>
        <h1 style="position: absolute; color: red; font-size: 13px; font-family: 'Source Sans Pro', sans-serif;  top: {data.authenticator ? "64.5%" : "58.5%"}; left: 58%; ">{data.incorrectpass? "Incorrect password" : ""}</h1>
        <h1 class="loggain">Inloggning</h1>
        <h3 style="top: {data.authenticator ? "32%" : "30%" };">Användarnamn</h3>
        <form method="POST" action="?/login">
        <div class="user-input"> 
        <input required type="text" class="användarnamn" placeholder={data.username} style="border: {data.noUsername? "3px solid var(--invalid)" : "3px solid var(--color)"}; top: {data.authenticator ? "36.5%": "34%"}" title="Skriv in ett godkänt användarnamn" pattern=".&#123;3,12&#125;" name="username" bind:value={username}>
        </div>
        <h4 style="top: {data.authenticator ? "45%" : "41%"}">3-12 karaktärer</h4>
        <h3 style="top: {data.authenticator ? "52%" : "48%"}">Lösenord</h3>
        <h4 style="top: {data.authenticator ? "65%" : "59%"}">Åtminstone 8 karaktärer</h4>
        <div class="userpass-input">
        <input required class="lösenord" placeholder={data.password} type="password" style="border: {data.incorrectpass? '3px solid var(--invalid)' : '3px solid var(--color)'}; top: {data.authenticator ? "56.5%" : "51.5%"};" pattern=".&#123;8,&#125;" title="Skriv in ett godkänt lösenord" name="password" bind:value={password}>
        </div>
        <button class="logga-in" style="top: {data.authenticator ? "82%" : "70.5%"};"type="submit"><p class="logga-in-text">Logga in</p></button>
        </form>
    </div>
	{#if data.authenticator}
	<div class="authenticator"><p style="position: absolute; top: 4%; left: 6.5%; font-family: 'Play', sans-serif;">Autentisering</p>
		<form method="POST" action="?/login">
			<input type="text" class="authfield" name="auth">
			<p class="avbrytauth"on:click={avbryt}>🞫</p>
			<button class="authbutton"><p>OK</p></button>
		</form></div>
		<div class="unableaccess-form"/>
		{/if}
		
</div>
{#if data.countValue > 0}
<h4 style="top: 97%; left: 2%; color: white">Misslyckade försök: {data.countValue} / 5</h4>
{/if}
</body>
