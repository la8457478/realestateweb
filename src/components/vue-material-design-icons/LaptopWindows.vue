<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon laptop-windows-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,4H21C21.55,4 22,4.45 22,5V16C22,16.55 21.55,17 21,17H22L24,20V21H0V20L2,17H3C2.45,17 2,16.55 2,16V5C2,4.45 2.45,4 3,4M4,6V15H20V6H4Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "LaptopWindowsIcon",
  props: {
    title: {
      type: String,
      default: "Laptop Windows icon"
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
