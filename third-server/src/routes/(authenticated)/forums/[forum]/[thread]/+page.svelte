<script>
    import { page } from '$app/stores';
    /** @type {import('./$types').PageData} */
    export let data;
  
    
</script>
{#if $page.url.pathname.split('/')[2] == "programmering"}
<div class="max-w-3xl mx-auto my-10 ">
    <div class="w-full h-11 relative rounded-t-lg bg-blue-900 flex overflow-hidden justify-start items-center space-x-1.5 px-2">
        <div class="absolute w-full h-full inset-0 dark:bg-black bg-gray-500 opacity-50"></div>
        <span class="relative w-3 h-3 border-2 rounded-full border-red-400"></span>
        <span class="relative w-3 h-3 border-2 rounded-full border-yellow-400"></span>
        <span class="relative w-3 h-3 border-2 rounded-full border-green-400"></span>
    </div>
    <div class="relative bg-blue-600  w-full h-96 border-t border-blue-900">
        <div class="absolute w-full h-full inset-0 dark:bg-black bg-gray-500 opacity-60"></div>
    </div>
</div>
{/if}
<div class="w-full h-32 bg-grayish"><span class="text-white bg-[rgb(196,203,214)] dark:bg-[rgb(101,107,116)]"></span></div>
<!--Användare: {data.user} Ämne:{data.Ämne} Beskrivning:{data.Beskrivning} skapadDatum:{data.skapadDatum} skapadTid:{data.skapadTid}</span>-->