<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon radio-am-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,7C3.9,7 3,7.9 3,9V17H5V13H7V17H9V9C9,7.9 8.1,7 7,7H5M5,9H7V11H5V9M13,7C11.9,7 11,7.9 11,9V17H13V9H15V16H17V9H19V17H21V9C21,7.9 20.1,7 19,7H13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "RadioAmIcon",
  props: {
    title: {
      type: String,
      default: "Radio Am icon"
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
