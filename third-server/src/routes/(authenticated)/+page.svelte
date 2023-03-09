<link href="https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@200&display=swap" rel="stylesheet">
<script lang="ts">
    import type {  PageData } from "./$types";
	export let data: PageData;
  let threads = data.threads;
  let posts = data.threads
</script>
<div class="overflow-x-auto w-full">
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr >
          <th class="rounded-none">
           
          </th>
          <th>FORUMS</th>
          <th>TRÅDAR</th>
          <th>INLÄGG</th>
          <th class="rounded-none">
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr>
          <th>
          </th>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img src="/Announcement.png" alt="Avatar Tailwind CSS Component" class="filter dark:invert-[70%]" />
                </div>
              </div>
              <div>
                <div class="font-bold">Officiela meddelanden</div>
                <div class="text-sm opacity-50">Meddelanden relaterade till sidan, nyinsatta regler </div>
              </div>
            </div>
          </td>
          <td class="font-['Saira_Condensed']">
            #{threads}
            <br>
            <span class="badge badge-ghost badge-sm">Senaste: {data.senaste}</span>
          </td>
          <td class="font-['Saira_Condensed']">#{posts}</td>
          <th>
          <a href="/forums/officiela-meddelanden"  class="btn btn-ghost btn-xs">GÅ TILL</a>
          </th>
        </tr>
        <!-- row 2 -->
        <tr>
          <th>
          </th>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask w-12 h-12">
                  <img src="/Feedback.png" alt="Feedback icon" class="filter dark:invert-[70%]"  />
                </div>
              </div>
              <div>
                <div class="font-bold">Feedback</div>
                <div class="text-sm opacity-50">Ge feedback på sidans features & föreslå förslag</div>
              </div>
            </div>
          </td>
          <td class="font-['Saira_Condensed']">
            #{threads}
            <br>
            <span class="badge badge-ghost badge-sm">Senaste: {data.senaste}</span>
          </td>
          <td class="font-['Saira_Condensed']">#{posts}</td>
          <th>
            <a href="/forums/feedback" class="btn btn-ghost btn-xs">GÅ TILL</a>
          </th>
        </tr>
        <!-- row 3 -->
        <tr>
          <th>
          </th>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask w-12 h-12">
                  <img src="/gaming.png" alt="Avatar Tailwind CSS Component" class="filter dark:invert-[70%]"/>
                </div>
              </div>
              <div>
                <div class="font-bold">Gaming</div>
                <div class="text-sm opacity-50">Allt inom speldatorer och spel</div>
              </div>
            </div>
          </td>
          <td class="font-['Saira_Condensed']">
            #{threads}
            <br>
            <span class="badge badge-ghost badge-sm">Senaste: {data.senaste}</span>
          </td>
          <td class="font-['Saira_Condensed']">#{posts}</td>
          <th>
            <a href="/forums/gaming" class="btn btn-ghost btn-xs">GÅ TILL</a>
          </th>
        </tr>
        <!-- row 4 -->
      
            <th class="group-hover:bg-red"></th>
            <td class="group-hover:bg-red">
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask w-12 h-12">
                    <img src="/Programming.png" alt="Avatar Tailwind CSS Component" class="filter dark:invert-[70%]" />
                  </div>
                </div>
                <div>
                  <div class="font-bold">programmering</div>
                  <div class="text-sm opacity-50">Diskussion/Hjälp inom programmering</div>
                </div>
              </div>
            </td>
            <td class="font-['Saira_Condensed']">
              #{threads}
              <br>
              <span class="badge badge-ghost badge-sm">Senaste: {data.senaste}</span>
            </td>
            <td class="font-['Saira_Condensed']">#{posts}</td>
            <th>
              <a href="/forums/programmering" class="btn btn-ghost btn-xs">GÅ TILL</a>
            </th>
      
          <!--Row 5-->
        <tr>
          <th>
            
          </th>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img src="/other.png" alt="Avatar Tailwind CSS Component" class="filter dark:invert-[70%]" />
                </div>
              </div>
              <div>
                <div class="font-bold">Annat</div>
                <div class="text-sm opacity-50">Allting utöver ovanstående forums</div>
              </div>
            </div>
          </td>
          <td class="font-['Saira_Condensed']">
            #{threads}
            <br>
            <span class="badge badge-ghost badge-sm">Senaste: {data.senaste}</span>
          </td>
          <td class="font-['Saira_Condensed']">#{posts}</td>
          <th>
            <a href="/forums/annat" class="btn btn-ghost btn-xs">GÅ TILL</a>
          </th>
        </tr>
      </tbody>
      <!-- foot -->
      
      
    </table>
  </div>
  