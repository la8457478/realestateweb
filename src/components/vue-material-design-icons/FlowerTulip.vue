<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon flower-tulip-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,13C3,17.97 7.03,22 12,22C12,17.03 7.97,13 3,13M12,22C16.97,22 21,17.97 21,13C16.03,13 12,17.03 12,22M18,3V8C18,11.31 15.31,14 12,14C8.69,14 6,11.31 6,8V3C6.74,3 7.47,3.12 8.16,3.39C8.71,3.62 9.2,3.96 9.61,4.39L12,2L14.39,4.39C14.8,3.96 15.29,3.62 15.84,3.39C16.53,3.12 17.26,3 18,3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FlowerTulipIcon",
  props: {
    title: {
      type: String,
      default: "Flower Tulip icon"
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
