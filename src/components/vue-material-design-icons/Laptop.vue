<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon laptop-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M4,6H20V16H4M20,18C21.1,18 22,17.1 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16C2,17.1 2.9,18 4,18H0V20H24V18H20Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "LaptopIcon",
  props: {
    title: {
      type: String,
      default: "Laptop icon"
    },
    decorative: {
      type: Boolean,
      default: false
    },
    fillColor: {
      type: String,
      default: "currentColor"
    }
  }
}
</script>
