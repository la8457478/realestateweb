<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon bookmark-music-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M17,3C18.1,3 19,3.9 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M11,11C9.9,11 9,11.9 9,13C9,14.1 9.9,15 11,15C12.1,15 13,14.1 13,13V8H16V6H12V11.27C11.71,11.1 11.36,11 11,11Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BookmarkMusicIcon",
  props: {
    title: {
      type: String,
      default: "Bookmark Music icon"
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
