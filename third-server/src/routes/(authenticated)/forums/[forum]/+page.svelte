<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@700&family=Bungee+Shade&family=Comfortaa&family=Play:wght@700&family=Signika+Negative&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@500&family=Manrope&display=swap" rel="stylesheet">
<script>
/** @type {import('./$types').PageData} */
    export let data;
    let slugLowercase = data.slug
    let slug = slugLowercase.toUpperCase()
    let threadInfoRaw = data.Threadinfo
    let threadInfo = JSON.parse(threadInfoRaw)
    var todayInfo = new Date();
    var dag = String(todayInfo.getDate()).padStart(2, '0');
    var månad = String(todayInfo.getMonth() + 1).padStart(2, '0');
    var år = todayInfo.getFullYear();
    var idag = år + '-' + månad + '-' + dag;
  </script>
  <style>
    .text {
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
           line-clamp: 2; 
   -webkit-box-orient: vertical;
}
  </style>

 <!--<button class="btn glass w-full ">+ Skapa Tråd</button>-->
   
    <div class="overflow-x-auto">
      
      <table class="table w-full">
        <!-- head -->
        <thead>
          <tr>
            <th class="rounded-none">Tråd</th>
            <th>Skapare</th>
            <th>Ämne</th>
            <th class="rounded-none">Senaste inlägg</th>
           
          </tr>
        </thead>
        {#each threadInfo as {threadIndex, Ämne, ämneLink, Beskrivning, beskrivningPrev, user, skapadDatum, skapadTid}}
        <tbody>
          <!-- row 1 -->
          <tr>
            <th class="font-['Bungee_Shade'] dark:text-silverLight text-black text-2xl h-24">#{threadIndex}</th>
            <td><p class="dark:text-silverLight text-black text-lg">{user}</p>{#if skapadDatum == idag}<p class="dark:text-silverLight text-black">{skapadTid}</p>{:else}<p class="dark:text-silverLight text-black">{skapadDatum}</p>{/if}</td>
            <td><p class="dark:text-silverLight text-black text-lg">{Ämne}</p><p class="dark:text-silverLight">{beskrivningPrev}</p></td>
            <td><p class="dark:text-silverLight text-black text-lg">{Ämne}</p><a href="./{slugLowercase}/{ämneLink}" class="absolute w-12 h-6 border-gray-500  text-gray-500 text-center rounded border m-[-0.8%] left-[87%] font-['Gemunu_Libre']">Visa</a><p class="dark:text-silverLight">{beskrivningPrev}</p></td>

          </tr>
        
         
        </tbody>
        {/each}

      </table>
    </div>
