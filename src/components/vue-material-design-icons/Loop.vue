<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon loop-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,14V21H2V19H5.57C4,17.3 3,15 3,12.5C3,7.25 7.25,3 12.5,3C17.75,3 22,7.25 22,12.5C22,17.75 17.75,22 12.5,22H12V20H12.5C16.64,20 20,16.64 20,12.5C20,8.36 16.64,5 12.5,5C8.36,5 5,8.36 5,12.5C5,14.47 5.76,16.26 7,17.6V14H9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "LoopIcon",
  props: {
    title: {
      type: String,
      default: "Loop icon"
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
