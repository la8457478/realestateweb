<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon format-list-bulleted-type-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,9.5L7.5,14H2.5L5,9.5M3,4H7V8H3V4M5,20C6.1,20 7,19.1 7,18C7,16.9 6.1,16 5,16C3.9,16 3,16.9 3,18C3,19.1 3.9,20 5,20M9,5V7H21V5H9M9,19H21V17H9V19M9,13H21V11H9V13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FormatListBulletedTypeIcon",
  props: {
    title: {
      type: String,
      default: "Format List Bulleted Type icon"
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
