<template>
  <footer class="fixed bottom-0 left-0 z-10 w-full bg-zinc-900">
    <p class="p-3 text-xs text-center text-white">
      ©
      <a :href="'https://github.com/tarenadiyaksa'"
        ><strong class="text-xs font-cff">tarenadiyaksa</strong></a
      >
      -
      {{ currentYear }}
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
  name: "Footer",
};
</script>
