<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon music-note-half-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,3V12.26C11.5,12.09 11,12 10.5,12C8.54,12 6.9,13.26 6.28,15H3V18H6.28C6.9,19.74 8.54,21 10.5,21C12.46,21 14.1,19.74 14.72,18H19V15H15V9L15,6V3H12M10.5,14.5C11.6,14.5 12.5,15.4 12.5,16.5C12.5,17.6 11.6,18.5 10.5,18.5C9.4,18.5 8.5,17.6 8.5,16.5C8.5,15.4 9.4,14.5 10.5,14.5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MusicNoteHalfIcon",
  props: {
    title: {
      type: String,
      default: "Music Note Half icon"
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
