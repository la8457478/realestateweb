<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon flag-triangle-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M7,2H9V22H7V2M19,9L11,14.6V3.4L19,9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FlagTriangleIcon",
  props: {
    title: {
      type: String,
      default: "Flag Triangle icon"
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
