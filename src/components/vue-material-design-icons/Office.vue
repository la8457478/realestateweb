<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon office-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,18L7,16.75V7L14,5V19.5L3.5,18.25L14,22L20,20.75V3.5L13.95,2L3,5.75V18Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "OfficeIcon",
  props: {
    title: {
      type: String,
      default: "Office icon"
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
