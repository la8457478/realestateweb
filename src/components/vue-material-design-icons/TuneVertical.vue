<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon tune-vertical-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,3V12H3V14H5V21H7V14H9V12H7V3M11,3V8H9V10H11V21H13V10H15V8H13V3M17,3V14H15V16H17V21H19V16H21V14H19V3">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TuneVerticalIcon",
  props: {
    title: {
      type: String,
      default: "Tune Vertical icon"
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
