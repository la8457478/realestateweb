<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon glassdoor-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M8,2C6.34,2 5,3.34 5,5V16.5H8V5H19C19,3.34 17.66,2 16,2H8M16,7.5V19H5C5,20.66 6.34,22 8,22H16C17.66,22 19,20.66 19,19V7.5H16Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "GlassdoorIcon",
  props: {
    title: {
      type: String,
      default: "Glassdoor icon"
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
