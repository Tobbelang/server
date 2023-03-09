<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300&family=Oxygen:wght@300&family=Source+Sans+Pro:wght@300&display=swap" rel="stylesheet">
<script lang="ts">
    import type {PageData} from "./$types";
	export let data: PageData;
    var username = "",password = "", validate_password = "";
	var incorrect_password = false;
</script>
<style>
   :root {
    --green: rgb(56, 178, 77);
    --red: rgb(255, 30, 0);
  --grey: hsl(0 0% 45%);
  --validconfirm: rgb(243,239,105);
  --valid: var(--green);
  --invalid: var(--red);
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
       width: 400px;
       height: 600px;
       background: linear-gradient(124deg, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
       background-size: 100% 1800%;
       left: 50%;
       top: 50%;
       transform:translate(-50%, -50%);
       animation: rainbow 18s ease infinite;
       border-radius: 15px;
}
.holder {
       position: absolute;
       width: 385px;
       height: 585px;
       background-color: black;
       left: 50%;
       top: 50%;
       transform:translate(-50%, -50%);
       animation: rainbow 18s ease infinite;
       border-radius: 15px;
}
.userpass-input:has(:invalid), .userpass-input:has(:invalid:focus), .user-input:has(:invalid), .user-input:has(:invalid:focus), .userpassconfirm-input:has(:invalid), .userpassconfirm-input:has(:invalid:focus) {
--color: var(--invalid)
}
.user-input:has(:placeholder-shown), .userpass-input:has(:placeholder-shown), .userpassconfirm-input:has(:placeholder-shown) {
  --color: var(--grey);
}
 .user-input:has(:valid), .userpass-input:has(:valid) {
--color: var(--valid)
}
.userpassconfirm-input:has(:valid) {
--color: var(--validconfirm)
}
input::placeholder {
  color: transparent;
}
form:valid [type="submit"] {
  background-color: rgb(0,128,0);
  cursor: pointer;
}
.registrera {
    position: absolute;
    color: white;
    font-size: 31.3px;
    left: 50%;
    top: 11%;
    transform:translate(-50%);
    font-family: 'Archivo', sans-serif;
}
.lösenord, .konfirmera-lösenord, .användarnamn{
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
.användarnamn {
    top: 30%;
}
.lösenord {
    top: 45%;
}
.konfirmera-lösenord {
    top: 51%;
}
.konfirmera-lösenord::placeholder {
    color: gray
}
h3, h4 {
    color: white;
}
h3 {
    position: absolute;
    font-size: 15px;
    left: 18%;
}

h4 {
    position: absolute;
    font-size: 10px;
    left: 18%;
    font-family: 'Oxygen', sans-serif;
    color: gray;
}
.konto {
    position: absolute;
    left: 28.5%;
    top: 71%;
    font-size: 12px;
    color: rgb(211,211,211)
}
.logga-in {
    position: absolute;
    left: 60%;
    top: 71%;
    font-size: 12px;
    color: rgb(85, 202, 238);
    text-decoration: underline;
}
.logga-in:hover {
    cursor: pointer;
    text-decoration: none;
    color: rgb(119, 214, 243);
}
.skapa-konto {
    position: absolute;
    top: 63.5%;
    left: 50%;
    transform:translate(-50%);
    width: 210px;
    height: 40px;
    border-radius: 20px;
    background-color: gray;
    z-index: 1001;
    outline: none;
}
.skapa-konto:hover {
    background-color: rgb(117, 115, 115)
}
.skapa-konto-text {
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
    <div class="holder">
        <h1 style="position: absolute; color: red; font-size: 13px; font-family: 'Source Sans Pro', sans-serif; top: 35.5%; left: 49%; ">{data.usernameTaken? "Username already in use" : ""}</h1>
        <h1 style="position: absolute; color: red; font-size: 13px; font-family: 'Source Sans Pro', sans-serif; top: 56.5%; left: 49%; ">{incorrect_password? "Passwords did not match" : ""}</h1>
        <h1 class="registrera">Registrera dig</h1>
        <p class="konto">Har du redan ett konto?</p> <a href="/login"><p class="logga-in">Logga in</p></a>
        <h3 style="top: 27%;">Användarnamn</h3>
        
        <form on:submit={(event)=>{
            if(validate_password !== password) {
                event.preventDefault()
                incorrect_password = true
            } 
     } 
    } method="POST" action="?/register">
        <div class="user-input"> 
        <input required type="text" class="användarnamn" style="border: {data.usernameTaken? "3px solid var(--invalid)" : "3px solid var(--color)"}" title="Skriv in ett godkänt användarnamn" placeholder="Skriv in ett godkänt användarnamn" pattern=".&#123;3,12&#125;" name="username" bind:value={username}>
        </div>
        <h4 style="top: 36%;">3-12 karaktärer</h4>
        <h3 style="top: 42%;">Lösenord</h3>
        <h4 style="top: 56.6%;">Åtminstone 8 karaktärer</h4>
        <div class="userpass-input">
        <input required class="lösenord"  type="password" style="border: {incorrect_password ? '3px solid var(--invalid)' : '3px solid var(--color)'};" pattern=".&#123;8,&#125;" title="Skriv in ett godkänt lösenord" placeholder="Skriv in ett godkänt lösenord" name="password" bind:value={password}>
        </div>
        <div class="userpassconfirm-input">
            <input required class="konfirmera-lösenord"  style="border: {incorrect_password ? '3px solid var(--invalid)' : '3px solid var(--color)'};" type="password" pattern=".&#123;8,&#125;" title="Skriv in ett godkänt lösenord" placeholder="Bekräfta lösenord" name="validate-password" bind:value={validate_password}>
            </div>
        <button class="skapa-konto" type="submit"><p class="skapa-konto-text">Skapa konto</p></button>
        </form>
    </div>
</div>

</body>