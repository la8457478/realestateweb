<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon archive-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,3H21V7H3V3M4,8H20V21H4V8M9.5,11C9.22,11 9,11.22 9,11.5V13H15V11.5C15,11.22 14.78,11 14.5,11H9.5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ArchiveIcon",
  props: {
    title: {
      type: String,
      default: "Archive icon"
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
