<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon note-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M14,10H19.5L14,4.5V10M5,3H15L21,9V19C21,20.1 20.1,21 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3M5,5V19H19V12H12V5H5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "NoteOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Note Outline icon"
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
