<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon timeline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,2V8H3V2H5M3,22H5V16H3V22M6,12C6,10.9 5.1,10 4,10C2.9,10 2,10.9 2,12C2,13.1 2.9,14 4,14C5.1,14 6,13.1 6,12M22,7V17C22,18.1 21.1,19 20,19H11C9.9,19 9,18.1 9,17V14L7,12L9,10V7C9,5.9 9.9,5 11,5H20C21.1,5 22,5.9 22,7Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TimelineIcon",
  props: {
    title: {
      type: String,
      default: "Timeline icon"
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
