<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon comment-plus-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,22C8.45,22 8,21.55 8,21V18H4C2.9,18 2,17.1 2,16V4C2,2.89 2.9,2 4,2H20C21.1,2 22,2.9 22,4V16C22,17.1 21.1,18 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22H9M11,6V9H8V11H11V14H13V11H16V9H13V6H11Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CommentPlusIcon",
  props: {
    title: {
      type: String,
      default: "Comment Plus icon"
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
