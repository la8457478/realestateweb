<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon food-off-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2,5.27L3.28,4L21,21.72L19.73,23L17.73,21H15.5L15.21,18.5L12.97,16.24C12.86,16.68 12.47,17 12,17H3C2.45,17 2,16.55 2,16C2,15.45 2.45,15 3,15H8L9.5,16.5L11,15H11.73L10.73,14H2C2,12.34 3.34,11 5,11H7.73L2,5.27M14,8H16.23L15.1,3.46L16.84,3L18.09,8H22L20.74,18.92L14.54,12.72L14,8M13,18C13,19.66 11.66,21 10,21H5C3.34,21 2,19.66 2,18H13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FoodOffIcon",
  props: {
    title: {
      type: String,
      default: "Food Off icon"
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
