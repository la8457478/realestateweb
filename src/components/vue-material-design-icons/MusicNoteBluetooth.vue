<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon music-note-bluetooth-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M10,3V12.26C9.5,12.09 9,12 8.5,12C6,12 4,14 4,16.5C4,19 6,21 8.5,21C11,21 13,19 13,16.5V6H17V3H10M20,7V10.79L17.71,8.5L17,9.21L19.79,12L17,14.79L17.71,15.5L20,13.21V17H20.5L23.35,14.15L21.21,12L23.36,9.85L20.5,7H20M21,8.91L21.94,9.85L21,10.79V8.91M21,13.21L21.94,14.15L21,15.09V13.21Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MusicNoteBluetoothIcon",
  props: {
    title: {
      type: String,
      default: "Music Note Bluetooth icon"
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
