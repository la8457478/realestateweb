<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon radio-fm-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,7V17H5V13H8V11H5V9H9V7H3M13,7C11.9,7 11,7.9 11,9V17H13V9H15V16H17V9H19V17H21V9C21,7.9 20.1,7 19,7H13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "RadioFmIcon",
  props: {
    title: {
      type: String,
      default: "Radio Fm icon"
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
