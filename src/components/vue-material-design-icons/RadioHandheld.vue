<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon radio-handheld-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,2C8.45,2 8,2.45 8,3C8,8.67 8,14.33 8,20C8,21.11 8.89,22 10,22H15C16.11,22 17,21.11 17,20V9C17,7.89 16.11,7 15,7H10V3C10,2.45 9.55,2 9,2M10,9H15V13H10V9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "RadioHandheldIcon",
  props: {
    title: {
      type: String,
      default: "Radio Handheld icon"
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
