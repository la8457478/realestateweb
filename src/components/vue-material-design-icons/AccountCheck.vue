<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon account-check-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M21.1,12.5L22.5,13.91L15.97,20.5L12.5,17L13.9,15.59L15.97,17.67L21.1,12.5M10,17L13,20H3V18C3,15.79 6.58,14 11,14L12.89,14.11L10,17M11,4C13.21,4 15,5.79 15,8C15,10.21 13.21,12 11,12C8.79,12 7,10.21 7,8C7,5.79 8.79,4 11,4Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AccountCheckIcon",
  props: {
    title: {
      type: String,
      default: "Account Check icon"
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
