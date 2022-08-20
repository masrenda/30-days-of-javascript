<template>
  <header
    class="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
  >
    <div class="flex items-center justify-between">
      <div>
        <div class="p-5 text-white">Logo</div>
      </div>
      <div class="sm:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block p-5 text-gray-500 hover:text-white focus:text-white focus:outline-none"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <nav :class="isOpen ? 'block' : 'hidden'" class="pt-2 pb-4 sm:flex sm:p-0">
      <a
        href="#"
        class="block px-2 py-1 font-semibold text-white rounded hover:bg-gray-800"
        >List your property</a
      >
      <a
        href="#"
        class="block px-2 py-1 mt-1 font-semibold text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >Trips</a
      >
      <a
        href="#"
        class="block px-2 py-1 mt-1 font-semibold text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >Messages</a
      >
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
