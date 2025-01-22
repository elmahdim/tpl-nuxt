<template>
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="grid md:grid-cols-2 gap-12">
      <div class="lg:w-3/4">
        <h2 class="text-3xl font-bold lg:text-4xl">{{ title }}</h2>
        <p class="mt-3">{{ description }}</p>
        <p class="mt-5">
          <a
            class="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
            href="{{cta.url}}"
          >
            {{ cta.label }}
            <svg
              class="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
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
          </a>
        </p>
      </div>

      <div class="space-y-6 lg:space-y-10">
        <div
          v-for="key in keysList"
          :key="key.title"
          class="flex gap-x-5 sm:gap-x-8"
        >
          <span
            class="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto"
          >
            <svg
              class="shrink-0 size-5"
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
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </span>
          <div class="grow">
            <h3 class="text-base sm:text-lg font-semibold">{{ key.title }}</h3>
            <p class="mt-1">{{ key.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Highlight key two columns",
      description: "With vertical block list",
      cta: {
        label: "Call to action",
        url: "#",
      },
      keysList: [
        {
          title: "Industry-leading documentation",
          description: `Our documentation and extensive Client libraries contain
              everything a business needs to build a custom integration in a
              fraction of the time.`,
          icon: "",
        },
        {
          title: "Industry-leading documentation",
          description: `Our documentation and extensive Client libraries contain
              everything a business needs to build a custom integration in a
              fraction of the time.`,
          icon: "",
        },
        {
          title: "Industry-leading documentation",
          description: `Our documentation and extensive Client libraries contain
              everything a business needs to build a custom integration in a
              fraction of the time.`,
          icon: "",
        },
      ],
    };
  },
};
</script>
