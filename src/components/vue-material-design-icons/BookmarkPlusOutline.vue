<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon bookmark-plus-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M17,18V5H7V18L12,15.82L17,18M17,3C18.1,3 19,3.9 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M11,7H13V9H15V11H13V13H11V11H9V9H11V7Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BookmarkPlusOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Bookmark Plus Outline icon"
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
