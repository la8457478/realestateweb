<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon desktop-mac-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M21,14H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16C1,17.1 1.9,18 3,18H10L8,21V22H16V21L14,18H21C22.1,18 23,17.1 23,16V4C23,2.89 22.1,2 21,2Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "DesktopMacIcon",
  props: {
    title: {
      type: String,
      default: "Desktop Mac icon"
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
