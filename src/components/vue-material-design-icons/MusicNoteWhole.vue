<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon music-note-whole-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M10.5,12C8.6,12 6.9,13.2 6.26,15H3V18H6.26C6.9,19.8 8.6,21 10.5,21C12.4,21 14.1,19.8 14.74,18H19V15H14.74C14.1,13.2 12.4,12 10.5,12M10.5,14.5C11.6,14.5 12.5,15.4 12.5,16.5C12.5,17.6 11.6,18.5 10.5,18.5C9.4,18.5 8.5,17.6 8.5,16.5C8.5,15.4 9.4,14.5 10.5,14.5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MusicNoteWholeIcon",
  props: {
    title: {
      type: String,
      default: "Music Note Whole icon"
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
