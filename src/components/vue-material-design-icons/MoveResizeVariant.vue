<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon move-resize-variant-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M1.88,0.46L0.46,1.88L5.59,7H2V9H9V2H7V5.59M11,7V9H21V15H23V9C23,7.9 22.1,7 21,7M7,11V21C7,22.1 7.9,23 9,23H15V21H9V11M15.88,14.46L14.46,15.88L19.6,21H17V23H23V17H21V19.59">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MoveResizeVariantIcon",
  props: {
    title: {
      type: String,
      default: "Move Resize Variant icon"
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
