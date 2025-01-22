<template>
  <component
    :is="tag"
    :href="tag === 'a' ? href : null"
    :class="computedClass"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "a",
      validator: (value) => ["a", "button"].includes(value),
    },
    href: {
      type: String,
      default: "#",
    },
    customClass: {
      type: String,
      default: "",
    },
    useStyle: {
      type: String,
      default: "default",
    },
  },
  computed: {
    computedClass() {
      const styles = {
        default:
          "px-4 py-1 text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-background duration-300 ease-out",
        lg: "px-10 py-4 bg-zinc-900 text-white text-lg font-medium rounded-full shadow-2xl hover:shadow-md transition-all duration-300 ease-out",
      };
      return `${styles[this.useStyle] || styles.default} ${this.customClass}`;
    },
  },
  methods: {
    handleClick(event) {
      if (this.tag === "a" && this.href === "#") {
        event.preventDefault();
      }
      this.$emit("click", event);
    },
  },
};
</script>
