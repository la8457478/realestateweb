<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon food-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M15.5,21L14,8H16.23L15.1,3.46L16.84,3L18.09,8H22L20.5,21H15.5M5,11H10C11.66,11 13,12.34 13,14H2C2,12.34 3.34,11 5,11M13,18C13,19.66 11.66,21 10,21H5C3.34,21 2,19.66 2,18H13M3,15H8L9.5,16.5L11,15H12C12.55,15 13,15.45 13,16C13,16.55 12.55,17 12,17H3C2.45,17 2,16.55 2,16C2,15.45 2.45,15 3,15Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FoodIcon",
  props: {
    title: {
      type: String,
      default: "Food icon"
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
