<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon music-circle-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M16,9V7H12V12.5C11.58,12.19 11.07,12 10.5,12C9.12,12 8,13.12 8,14.5C8,15.88 9.12,17 10.5,17C11.88,17 13,15.88 13,14.5V9H16M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MusicCircleIcon",
  props: {
    title: {
      type: String,
      default: "Music Circle icon"
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
