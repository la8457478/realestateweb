<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon forum-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M4,2C2.9,2 2,2.9 2,4V17L6,13H15C16.1,13 17,12.1 17,11V4C17,2.9 16.1,2 15,2H4M4,4H15V11H6L4,13V4M19,6V8H20V18L18,16H8V15H6V16C6,17.1 6.9,18 8,18H18L22,22V8C22,6.9 21.1,6 20,6H19Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ForumOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Forum Outline icon"
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
