<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon midi-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M10,7H12V15H10V7M13,7H19C19.55,7 20,7.45 20,8V14C20,14.55 19.55,15 19,15H13V10H15V13H18V9H13V7M21,7H23V15H21V7M1,7H3L8,7C8.55,7 9,7.45 9,8V15H7V9H6V15H4V9H3V15H1V7M1,16H23V19H1V16Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MidiIcon",
  props: {
    title: {
      type: String,
      default: "Midi icon"
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
