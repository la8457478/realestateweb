<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon forum-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M17,12V3C17,2.45 16.55,2 16,2H3C2.45,2 2,2.45 2,3V17L6,13H16C16.55,13 17,12.55 17,12M21,6H19V15H6V17C6,17.55 6.45,18 7,18H18L22,22V7C22,6.45 21.55,6 21,6Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ForumIcon",
  props: {
    title: {
      type: String,
      default: "Forum icon"
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
