<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon file-replace-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M14,3L12,1H4C2.9,1 2,1.9 2,3V15C2,16.1 2.9,17 4,17H11V19L15,16L11,13V15H4V3H14M21,10V21C21,22.1 20.1,23 19,23H8C6.9,23 6,22.1 6,21V19H8V21H19V12H14V7H8V13H6V7C6,5.9 6.9,5 8,5H16L21,10Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FileReplaceOutlineIcon",
  props: {
    title: {
      type: String,
      default: "File Replace Outline icon"
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
