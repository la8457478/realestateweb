<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon music-note-quarter-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,3H15V15H19V18H14.72C14.1,19.74 12.46,21 10.5,21C8.54,21 6.9,19.74 6.28,18H3V15H6.28C6.9,13.26 8.54,12 10.5,12C11,12 11.5,12.09 12,12.26V3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MusicNoteQuarterIcon",
  props: {
    title: {
      type: String,
      default: "Music Note Quarter icon"
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
