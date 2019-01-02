<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon bookmark-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M17,3H7C5.9,3 5,3.9 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BookmarkIcon",
  props: {
    title: {
      type: String,
      default: "Bookmark icon"
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
