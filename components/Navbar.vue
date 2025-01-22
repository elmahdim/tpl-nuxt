<template>
  <header class="fixed top-0 left-0 right-0 bg-white md:bg-transparent z-10">
    <CommonContainer>
      <nav class="flex flex-wrap justify-between items-center py-4">
        <div class="text-xl font-bold text-primary">Brand</div>
        <ul class="hidden md:flex space-x-6 font-medium">
          <li>
            <a href="/privacy-policy" class="hover:text-blue-800"
              >Privacy Policy</a
            >
          </li>
          <li><a href="/terms" class="hover:text-blue-800">Terms</a></li>
          <li><a href="#" class="hover:text-blue-800">FAQs</a></li>
        </ul>
        <CommonButton tag="a" href="#" class="hidden md:inline-block"
          >Call to Action</CommonButton
        >
        <button
          class="md:hidden text-primary focus:outline-none"
          @click="toggleMenu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </nav>
      <div v-if="isMenuOpen" class="md:hidden">
        <ul class="flex flex-col space-y-4 font-medium">
          <li>
            <a href="/privacy-policy" class="hover:text-blue-800"
              >Privacy Policy</a
            >
          </li>
          <li><a href="/terms" class="hover:text-blue-800">Terms</a></li>
          <li><a href="#" class="hover:text-blue-800">FAQs</a></li>
          <li><CommonButton tag="a" href="#">Call to Action</CommonButton></li>
        </ul>
      </div>
    </CommonContainer>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
