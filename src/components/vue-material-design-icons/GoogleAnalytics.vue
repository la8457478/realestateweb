<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon google-analytics-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,3C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H17L15,21V9L15,5C15,3.9 15.9,3 17,3H19M5,21C3.9,21 3,20.1 3,19V17C3,15.9 3.9,15 5,15H9V11C9,9.9 9.9,9 11,9H14.5V21H5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "GoogleAnalyticsIcon",
  props: {
    title: {
      type: String,
      default: "Google Analytics icon"
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
