<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon dishwasher-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M14,16C14,16.55 13.82,17 13.43,17.41C13.04,17.8 12.56,18 12,18C11.44,18 10.96,17.8 10.57,17.41C10.18,17 10,16.55 10,16C10,15.67 10.15,15.18 10.5,14.5C10.8,13.84 11.14,13.25 11.5,12.75L12,12C13.34,13.94 14,15.27 14,16M17,6C17.55,6 18,6.45 18,7C18,7.55 17.55,8 17,8C16.45,8 16,7.55 16,7C16,6.45 16.45,6 17,6M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M5,5V9H19V5H5M5,11V19H19V11H5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "DishwasherIcon",
  props: {
    title: {
      type: String,
      default: "Dishwasher icon"
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
