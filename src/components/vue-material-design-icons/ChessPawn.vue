<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon chess-pawn-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,22H5V20H19V22M16,18L13.2,7.74C14.72,7.07 15.41,5.31 14.74,3.79C14.08,2.27 12.31,1.58 10.79,2.25C9.27,2.91 8.58,4.68 9.25,6.2C9.55,6.89 10.1,7.44 10.79,7.74L8,18H16Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ChessPawnIcon",
  props: {
    title: {
      type: String,
      default: "Chess Pawn icon"
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
