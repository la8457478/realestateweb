<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon umbrella-closed-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,1.53L17.5,15H13V19C13,20.66 11.66,22 10,22C8.34,22 7,20.66 7,19V18H9V19C9,19.55 9.45,20 10,20C10.55,20 11,19.55 11,19V15H6.5L12,1.53Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "UmbrellaClosedIcon",
  props: {
    title: {
      type: String,
      default: "Umbrella Closed icon"
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
