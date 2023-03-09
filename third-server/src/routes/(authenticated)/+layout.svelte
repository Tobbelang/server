<link href="https://fonts.googleapis.com/css2?family=Rajdhani&display=swap" rel="stylesheet">
<script lang="ts">
import { page } from '$app/stores';
  import type { LayoutServerData } from "./$types";
  export let data: LayoutServerData;
  import "../../app.css";
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'

onMount(() => {
  themeChange(false)
  // 👆 false parameter is required for svelte
})

</script>
<style>
a {
  color: inherit;
}
.pixel-icon {
  position:absolute;
  left:65px;
  top: 20px;

}
.pixel-icon-bg {
  position: absolute;
  top: 13px;
  left: 57px;
  height: 40px;
  width: 40px;
  border-radius: 20%;
  cursor:cell;
}
.pixel-icon-bg:hover {
  background-color:rgba(0,0,0,0.2);
}
</style>
<div class="navbar bg-base-100">
    <div class="navbar-start">
      {#if !$page.url.pathname.split('/')[1]}
      <a href="./pixelart-tool"><img class="pixel-icon" src="pixel.png" width="25px" height="22px" alt="brush">
      <div class="pixel-icon-bg"></div></a>
      {/if}
      <div class="dropdown">
        
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="/../profile">Profile</a></li>
          <!-- svelte-ignore a11y-missing-attribute -->
          <li><a href="/../settings">Settings</a></li>
        </ul>
      </div>
      <nav class="flex mt-1" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          {#if $page.url.pathname.split('/')[1]}
          <li class="inline-flex items-center">
            <a href="/" class="ml-[18px] inline-flex items-center  text-base font-medium font-['Rajdhani'] text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg class="absolute left-14 top-6 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
              HEM
            </a>
          </li>
          {/if}
          {#if $page.url.pathname.split('/')[1]}
          <li>
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              <span class="ml-1 text-base font-medium text-gray-500 font-['Rajdhani'] md:ml-2 dark:text-gray-400 ">{$page.url.pathname.split('/')[1].toUpperCase()}</span>
            </div>
          </li>
          {/if}
         {#if $page.url.pathname.split('/')[2]}
          <li aria-current="page">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              {#if $page.url.pathname.split('/')[3]}
              <a href="/forums/{$page.url.pathname.split('/')[2]}" class="ml-1 text-base font-medium text-gray-500 font-['Rajdhani'] md:ml-2 dark:text-gray-400">{$page.url.pathname.split('/')[2].toUpperCase()}</a>
              {:else}
              <span class="ml-1 text-base font-medium text-gray-500 font-['Rajdhani'] md:ml-2 dark:text-gray-400">{$page.url.pathname.split('/')[2].toUpperCase()}</span>
             <a href="/forums/{$page.url.pathname.split('/')[2]}/skapa-thread">
                <button type='button' class='relative mt-1 pl-1 pr-1 ml-2 hover:bg-silverLight'>
                  <div class='flex items-center space-x-4'><span class="absolute mb-[2px] dark:text-black">⟬</span>
                    <svg width='16' height='16' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M5.10714 0C3.75264 0 2.45362 0.538072 1.49585 1.49585C0.538072 2.45362 0 3.75264 0 5.10714V29.4643C0 30.8188 0.538072 32.1178 1.49585 33.0756C2.45362 34.0334 3.75264 34.5714 5.10714 34.5714H18.0714C17.5227 33.8418 17.0607 33.0508 16.6949 32.2143H5.10714C4.3778 32.2143 3.67832 31.9246 3.1626 31.4088C2.64687 30.8931 2.35714 30.1936 2.35714 29.4643V5.10714C2.35714 3.58914 3.58914 2.35714 5.10714 2.35714H29.4643C30.9823 2.35714 32.2143 3.58914 32.2143 5.10714V16.6949C33.0507 17.0602 33.8417 17.5216 34.5714 18.0699V5.10714C34.5714 3.75264 34.0334 2.45362 33.0756 1.49585C32.1178 0.538072 30.8188 0 29.4643 0H5.10714ZM8.64286 10.989C7.60094 10.989 6.60169 11.4029 5.86494 12.1397C5.12819 12.8764 4.71429 13.8757 4.71429 14.9176C4.71429 15.9595 5.12819 16.9587 5.86494 17.6955C6.60169 18.4322 7.60094 18.8461 8.64286 18.8461C9.68478 18.8461 10.684 18.4322 11.4208 17.6955C12.1575 16.9587 12.5714 15.9595 12.5714 14.9176C12.5714 13.8757 12.1575 12.8764 11.4208 12.1397C10.684 11.4029 9.68478 10.989 8.64286 10.989ZM7.07143 14.9176C7.07143 14.5008 7.23699 14.1011 7.53169 13.8064C7.82639 13.5117 8.22609 13.3461 8.64286 13.3461C9.05963 13.3461 9.45933 13.5117 9.75403 13.8064C10.0487 14.1011 10.2143 14.5008 10.2143 14.9176C10.2143 15.3343 10.0487 15.734 9.75403 16.0287C9.45933 16.3234 9.05963 16.489 8.64286 16.489C8.22609 16.489 7.82639 16.3234 7.53169 16.0287C7.23699 15.734 7.07143 15.3343 7.07143 14.9176ZM4.71429 25.9239C4.71429 24.8819 5.12819 23.8827 5.86494 23.1459C6.60169 22.4092 7.60094 21.9953 8.64286 21.9953C9.68478 21.9953 10.684 22.4092 11.4208 23.1459C12.1575 23.8827 12.5714 24.8819 12.5714 25.9239C12.5714 26.9658 12.1575 27.965 11.4208 28.7018C10.684 29.4385 9.68478 29.8524 8.64286 29.8524C7.60094 29.8524 6.60169 29.4385 5.86494 28.7018C5.12819 27.965 4.71429 26.9658 4.71429 25.9239ZM8.64286 24.3524C8.22609 24.3524 7.82639 24.518 7.53169 24.8127C7.23699 25.1074 7.07143 25.5071 7.07143 25.9239C7.07143 26.3406 7.23699 26.7403 7.53169 27.035C7.82639 27.3297 8.22609 27.4953 8.64286 27.4953C9.05963 27.4953 9.45933 27.3297 9.75403 27.035C10.0487 26.7403 10.2143 26.3406 10.2143 25.9239C10.2143 25.5071 10.0487 25.1074 9.75403 24.8127C9.45933 24.518 9.05963 24.3524 8.64286 24.3524ZM15.3214 12.5714C15.0089 12.5714 14.7091 12.6956 14.4881 12.9166C14.267 13.1377 14.1429 13.4374 14.1429 13.75C14.1429 14.0626 14.267 14.3624 14.4881 14.5834C14.7091 14.8044 15.0089 14.9286 15.3214 14.9286H28.6786C28.9912 14.9286 29.2909 14.8044 29.5119 14.5834C29.733 14.3624 29.8571 14.0626 29.8571 13.75C29.8571 13.4374 29.733 13.1377 29.5119 12.9166C29.2909 12.6956 28.9912 12.5714 28.6786 12.5714H15.3214ZM27.5 37.7143C30.209 37.7143 32.807 36.6381 34.7226 34.7226C36.6381 32.807 37.7143 30.209 37.7143 27.5C37.7143 24.791 36.6381 22.193 34.7226 20.2774C32.807 18.3619 30.209 17.2857 27.5 17.2857C24.791 17.2857 22.193 18.3619 20.2774 20.2774C18.3619 22.193 17.2857 24.791 17.2857 27.5C17.2857 30.209 18.3619 32.807 20.2774 34.7226C22.193 36.6381 24.791 37.7143 27.5 37.7143V37.7143ZM27.5 20.4286C27.7084 20.4286 27.9082 20.5114 28.0556 20.6587C28.2029 20.8061 28.2857 21.0059 28.2857 21.2143V26.7143H33.7857C33.9941 26.7143 34.194 26.7971 34.3413 26.9444C34.4887 27.0918 34.5714 27.2916 34.5714 27.5C34.5714 27.7084 34.4887 27.9082 34.3413 28.0556C34.194 28.2029 33.9941 28.2857 33.7857 28.2857H28.2857V33.7857C28.2857 33.9941 28.2029 34.194 28.0556 34.3413C27.9082 34.4887 27.7084 34.5714 27.5 34.5714C27.2916 34.5714 27.0918 34.4887 26.9444 34.3413C26.7971 34.194 26.7143 33.9941 26.7143 33.7857V28.2857H21.2143C21.0059 28.2857 20.8061 28.2029 20.6587 28.0556C20.5114 27.9082 20.4286 27.7084 20.4286 27.5C20.4286 27.2916 20.5114 27.0918 20.6587 26.9444C20.8061 26.7971 21.0059 26.7143 21.2143 26.7143H26.7143V21.2143C26.7143 21.0059 26.7971 20.8061 26.9444 20.6587C27.0918 20.5114 27.2916 20.4286 27.5 20.4286V20.4286ZM5.89286 4.71429C5.58028 4.71429 5.28051 4.83846 5.05948 5.05948C4.83846 5.28051 4.71429 5.58028 4.71429 5.89286C4.71429 6.20543 4.83846 6.50521 5.05948 6.72623C5.28051 6.94726 5.58028 7.07143 5.89286 7.07143H28.6786C28.9912 7.07143 29.2909 6.94726 29.5119 6.72623C29.733 6.50521 29.8571 6.20543 29.8571 5.89286C29.8571 5.58028 29.733 5.28051 29.5119 5.05948C29.2909 4.83846 28.9912 4.71429 28.6786 4.71429H5.89286Z'
                        fill='black' />
                    </svg>
                    <span class="text-base font-medium text-black font-['Rajdhani']">Skapa Tråd ⟭</span>
                  </div>
              </a>
              {/if}
              
            </div>
          </li>
          {/if}
          {#if $page.url.pathname.split('/')[3]}
          <li aria-current="page">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              <span class="ml-1 text-base font-medium text-gray-500 font-['Rajdhani'] md:ml-2 dark:text-gray-400">{$page.url.pathname.split('/')[3].toUpperCase()}</span>
            </div>
          </li>
          {/if}
        </ol>
      </nav>
    </div>
   
    <div class="navbar-center">
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="btn btn-ghost normal-case text-xl text-slate ">{data.name} #{data.userindex}</a>
    </div>
    <div class="navbar-end">

      <label class="swap swap-rotate absolute top-[21px] right-[100px]">
  
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" data-toggle-theme="dark,light" data-act-class="ACTIVECLASS"/>
        <!-- sun icon -->
        <svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
        
        <!-- moon icon -->
        <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
        
      </label>

      <button class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          <span class="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
     
        </div>
  </div>
<slot />
