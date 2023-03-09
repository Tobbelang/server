<style>
input[type="file"] {
    display: none;
}
.custom-file-upload {
    border: 1px solid #ccc;
    height: 100px;

    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
}
</style>
<link href="https://fonts.googleapis.com/css2?family=Manrope&family=Maven+Pro:wght@600&display=swap" rel="stylesheet">
<div class="absolute block sm:hidden left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">För small skärm minimum 640px.</div>
<div class="absolute rounded hidden sm:block left-[10%] w-4/5 h-4/5 sm:w-full sm:h-[92.4%] sm:left-0 sm:top-13 xl:w-[90%] xl:left-[5%] xl:top-[12%] xl:h-[83%]  bg-grayish rounded-none]">
  
  <label for="file-upload" class="absolute h-48 w-48 rounded-full cursor-pointer bg-grayish xl:left-[calc((310px-192px)/2)] xl:translate-x-0 xl:top-[15px] sm:left-[50%] sm:translate-x-[-50%] sm:ml-0 sm:mt-10"></label>
  <img src="profile-icon.png" class="absolute xl:left-[71px] xl:ml-0 xl:translate-x-0 xl:top-[15px] mt-[90px] sm:left-[50%] sm:translate-x-[-50%] sm:ml-0 sm:mt-12 sm:absolute" alt="Choose profile icon " width="160px"><input id="file-upload" type="file"/>

<div class=" absolute xl:top-[335px] xl:left-[35px] xl:translate-x-0 sm:left-[50%] sm:translate-x-[-50%] sm:top-[175px] card xl:bg-base-100 xl:shadow-xl xl:w-60 sm:bg-[rgba(0,0,0,0)] sm:shadow-none">
  <figure class="px-10 pt-10  ">
    <img src="star-rating.jpg" alt="Shoes" class="rounded-xl sm:hidden xl:block"  />
  </figure>
  <div class="card-body items-center text-center ">
    <h2 class="card-title font-['Maven_Pro'] ">Ditt rykte</h2>
    <div class="flex  w-[100%] h-7 mt-[-12px]"><p class="absolute text-upvote font-['Maven_Pro'] font-semibold text-lg self-center left-[50%] translate-x-[-50%]">+354</p></div>
    <div class="card-actions sm:hidden xl:block">
    </div>
  </div>
</div>

<div class="flex justify-center absolute h-12 w-[50%] sm:ml-0 sm:left-[50%] xl:left-[100%] xl:translate-x-[-100%] sm:translate-x-[-50%] xl:w-[60%] rounded-full bg-grayish xl:mt-[0%] xl:top-24  sm:top-80"><p class="absolute top-[50%] translate-y-[-50%] text-['Manrope']">Admin#0000</p></div>
<input class="absolute h-12 w-[50%] xl:w-[60%] text-center rounded-full bg-grayish xl:left-[100%] xl:translate-x-[-100%]  xl:top-40  sm:top-96 sm:w-4/5 sm:left-[10%]" placeholder="Smeknamn">

<form>
  <div class="absolute hidden sm:block mb-4 w-[70%] bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 sm:top-[60%] sm:w-4/5 sm:left-[10%] xl:left-[100%] xl:translate-x-[-100%] xl:top-[40%] xl:w-[60%]">
      <div class="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
          <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
              <div class="flex items-center space-x-1 sm:pr-4">
                  <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path></svg>
                      <span class="sr-only">Attach file</span>
                  </button>
                  <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                      <span class="sr-only">Embed map</span>
                  </button>
                  <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                      <span class="sr-only">Upload image</span>
                  </button>
                  <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                       <span class="sr-only">Format code</span>
                  </button>
                  <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"></path></svg>
                      <span class="sr-only">Add emoji</span>
                  </button>
              </div>
              <div class="flex flex-wrap items-center space-x-1 sm:pl-4">
                  <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                      <span class="sr-only">Add list</span>
                  </button>
                  <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>       
                      <span class="sr-only">Settings</span>
                  </button>
                  <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                      <span class="sr-only">Timeline</span>
                  </button>
                  <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      <span class="sr-only">Download</span>
                  </button>
              </div>
          </div>
          <button type="button" data-tooltip-target="tooltip-fullscreen" class="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Full screen</span>
          </button>
          <div id="tooltip-fullscreen" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(0px, 8px, 0px);">
              Show full screen
              <div class="tooltip-arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate3d(0px, 0px, 0px);"></div>
          </div>
      </div>
      <div class="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
          <label for="editor" class="sr-only">Publish post</label>
          <textarea id="editor" rows="7" class="sm:block resize-none px-0 w-full text-sm text-gray-800 outline-0 border-0 dark:bg-gray-800 focus:ring-0 dark:text-gray-800 dark:placeholder-gray-400" placeholder="Skriv din beskrivning..." required></textarea>
          <button type="submit" class="absolute right-0 top-[110%] inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 sm:right-[50%] translate-x-[50%] sm:px-16" >
            Spara ändringar
         </button>
        </div>
  </div>

</form>

</div>


<!--<textarea class="absolute pl-4 pt-2 resize-none h-80 xl:h-[270px] w-[70%] rounded-lg bg-grayish ml-[27%] mt-[0%] top-80 text-top" placeholder="Beskrivning"></textarea>-->