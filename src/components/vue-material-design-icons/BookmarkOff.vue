<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon bookmark-off-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M20,20.72L18.73,22L16.78,20.05L12,18L5,21V8.27L2,5.27L3.28,4L20,20.72M19,17.16V5C19,3.89 18.1,3 17,3H7C6.41,3 5.89,3.27 5.5,3.68L19,17.16Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BookmarkOffIcon",
  props: {
    title: {
      type: String,
      default: "Bookmark Off icon"
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
