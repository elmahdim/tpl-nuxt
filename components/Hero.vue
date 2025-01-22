<template>
  <main class="hero text-center py-6 content-center">
    <CommonContainer>
      <a
        class="relative z-10 mb-4 inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300"
        href="#"
      >
        Watch our detailed demo
        <span class="flex items-center gap-x-1">
          <span
            class="border-s border-gray-200 font-medium ps-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600"
            >Videos</span
          >
          <svg
            class="shrink-0 size-4 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </span>
      </a>

      <img class="grid-pattern" src="/grid-pattern.svg" alt="Alt" />
      <div class="z-10 relative">
        <div class="mt-5 max-w-lg text-center mx-auto">
          <h1 class="font-black text-primary text-4xl md:text-5xl lg:text-6xl">
            Hero Section Above the Fold
          </h1>
        </div>

        <div class="mt-6">
          <p class="text-zinc-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            consequuntur qui quo nulla distinctio inventore ducimus consectetur,
            iusto dolorum doloremque esse cupiditate sed
          </p>
        </div>

        <div class="mt-8">
          <CommonButton useStyle="lg"> Get started now ↗ </CommonButton>
        </div>
      </div>
    </CommonContainer>
  </main>
</template>

<style>
.hero {
  background: linear-gradient(to bottom, white, white 50%, #caf7fb),
    linear-gradient(to right, #fdf6e5, white 50%, #fbdbe3);
  background-blend-mode: multiply;
  height: 80vh;
  overflow: hidden;
  position: relative;
}

.grid-pattern {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
  pointer-events: none;
  user-select: none;
}
</style>

<script>
export default {
  data() {
    return {};
  },
};
</script>
