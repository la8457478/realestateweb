<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon iframe-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9.5,8.5L11,10L8,13L11,16L9.5,17.5L5,13L9.5,8.5M14.5,17.5L13,16L16,13L13,10L14.5,8.5L19,13L14.5,17.5M21,2H3C1.9,2 1,2.9 1,4V20C1,21.1 1.9,22 3,22H21C22.1,22 23,21.1 23,20V4C23,2.9 22.1,2 21,2M21,20H3V6H21V20Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "IframeOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Iframe Outline icon"
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
