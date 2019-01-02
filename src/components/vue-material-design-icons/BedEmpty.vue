<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon bed-empty-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,7H5V14H3V5H1V20H3V17H21V20H23V11C23,8.79 21.21,7 19,7">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BedEmptyIcon",
  props: {
    title: {
      type: String,
      default: "Bed Empty icon"
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
