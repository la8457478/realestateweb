<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon instapaper-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M10,5C10,4.45 9.55,4 9,4H8V2H16V4H15C14.45,4 14,4.45 14,5V19C14,19.55 14.45,20 15,20H16V22H8V20H9C9.55,20 10,19.55 10,19V5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "InstapaperIcon",
  props: {
    title: {
      type: String,
      default: "Instapaper icon"
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
