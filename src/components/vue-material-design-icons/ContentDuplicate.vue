<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon content-duplicate-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M11,17H4C2.9,17 2,16.1 2,15V3C2,1.9 2.9,1 4,1H16V3H4V15H11V13L15,16L11,19V17M19,21V7H8V13H6V7C6,5.9 6.9,5 8,5H19C20.1,5 21,5.9 21,7V21C21,22.1 20.1,23 19,23H8C6.9,23 6,22.1 6,21V19H8V21H19Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ContentDuplicateIcon",
  props: {
    title: {
      type: String,
      default: "Content Duplicate icon"
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
