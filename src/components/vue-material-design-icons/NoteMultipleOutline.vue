<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon note-multiple-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,6V22H21V24H3C1.9,24 1,23.1 1,22V6H3M16,9H21.5L16,3.5V9M7,2H17L23,8V18C23,19.1 22.1,20 21,20H7C5.89,20 5,19.1 5,18V4C5,2.9 5.9,2 7,2M7,4V18H21V11H14V4H7Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "NoteMultipleOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Note Multiple Outline icon"
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
