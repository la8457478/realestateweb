<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon play-pause-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,5V19L11,12M13,19H16V5H13M18,5V19H21V5">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PlayPauseIcon",
  props: {
    title: {
      type: String,
      default: "Play Pause icon"
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
