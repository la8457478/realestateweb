<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon play-protected-content-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2,5V18H11V16H4V7H17V11H19V5H2M9,9V14L12.5,11.5L9,9M21.04,11.67L16.09,16.62L13.96,14.5L12.55,15.91L16.09,19.45L22.45,13.09L21.04,11.67Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PlayProtectedContentIcon",
  props: {
    title: {
      type: String,
      default: "Play Protected Content icon"
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
