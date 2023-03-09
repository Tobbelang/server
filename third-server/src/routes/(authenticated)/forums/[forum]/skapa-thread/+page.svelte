<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap" rel="stylesheet">
<style>
  .usualcssradio {
   display: flex;
    position: absolute;
   left: 40.5%;
   top: 53.7%; 
   color: #100720;
   font-family: 'Saira Condensed', sans-serif;
  }
  .usualcssradio2 {
    display: flex;
   position: absolute;
   left: 40.5%;
   top: 57.5%; 
   font-family: 'Saira Condensed', sans-serif;
  }
  input[type="radio"]:checked {
    background-color: #6A64F1;
}
input[type="radio"] {
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  border: 0.01px solid black;
  border-radius: 3px;
  }
</style>
<div class="flex items-center justify-center p-12">
    <div class="mx-auto w-full max-w-[550px]">
      <form method="POST" action="?/register">
        <div class="mb-5">
          <label
            for="Ämne"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Ämne
          </label>
          <input
            type="text"
            name="Ämne"
            id="Ämne"
            placeholder="Skriv in ditt ämne"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="message"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Beskrivning
          </label>
          <textarea
            rows="4"
            name="Beskrivning"
            id="message"
            placeholder="Skriv din beskrivning"
            class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div>
          <button
            class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
          >
            Submit
          </button>
        </div>
        <div class="usualcssradio">
          <input checked id="default-radio-1" type="radio" value="1" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
          <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Show username</label>
      </div>
      <div class="usualcssradio2">
          <input id="default-radio-2" type="radio" value="0" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
          <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Anonymous</label>
      </div>
      </form>
    </div>
  </div>