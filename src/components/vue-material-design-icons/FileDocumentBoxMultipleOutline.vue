<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon file-document-box-multiple-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M16,15H9V13H16V15M19,11H9V9H19V11M19,7H9V5H19V7M3,5V21H19V23H3C1.9,23 1,22.1 1,21V5H3M21,1C22.1,1 23,1.9 23,3V17C23,18.11 22.11,19 21,19H7C5.9,19 5,18.1 5,17V3C5,1.89 5.89,1 7,1H21M7,3V17H21V3H7Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FileDocumentBoxMultipleOutlineIcon",
  props: {
    title: {
      type: String,
      default: "File Document Box Multiple Outline icon"
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
