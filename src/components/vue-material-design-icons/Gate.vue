<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon gate-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,5V10H7V6H5V10H3V8H1V20H3V18H5V20H7V18H9V20H11V18H13V20H15V18H17V20H19V18H21V20H23V8H21V10H19V6H17V10H15V5H13V10H11V5H9M3,12H5V16H3V12M7,12H9V16H7V12M11,12H13V16H11V12M15,12H17V16H15V12M19,12H21V16H19V12Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "GateIcon",
  props: {
    title: {
      type: String,
      default: "Gate icon"
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
