<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon comment-text-multiple-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,23C11.45,23 11,22.55 11,22V19H7C5.9,19 5,18.1 5,17V7C5,5.9 5.9,5 7,5H21C22.1,5 23,5.9 23,7V17C23,18.1 22.1,19 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3C1,1.9 1.9,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CommentTextMultipleOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Comment Text Multiple Outline icon"
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
