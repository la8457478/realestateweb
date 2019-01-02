<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon flag-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FlagIcon",
  props: {
    title: {
      type: String,
      default: "Flag icon"
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
