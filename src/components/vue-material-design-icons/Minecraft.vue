<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon minecraft-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M4,2H20C21.1,2 22,2.9 22,4V20C22,21.1 21.1,22 20,22H4C2.9,22 2,21.1 2,20V4C2,2.9 2.9,2 4,2M6,6V10H10V12H8V18H10V16H14V18H16V12H14V10H18V6H14V10H10V6H6Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MinecraftIcon",
  props: {
    title: {
      type: String,
      default: "Minecraft icon"
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
