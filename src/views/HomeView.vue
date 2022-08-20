<template>
  <div id="Home">
    <div class="container flex-wrap mx-auto">
      <div class="flex items-center justify-center min-h-screen">
        <div class="flex flex-col gap-4">
          <img
            src="../components/icons/js.svg"
            alt=""
            class="items-center w-20 h-20 mx-auto"
          />
          <h1 class="text-xl font-bold text-center uppercase font-cff">
            30 days of javascript
          </h1>
          <div class="grid grid-cols-1 place-items-center">
            <RouterLink
              to="/list"
              class="px-6 py-2 text-sm font-bold uppercase transition duration-200 ease-in-out rounded-lg text-slate-200 font-cff hover:opacity-80 bg-zinc-800"
              tag="button"
              >start now</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
