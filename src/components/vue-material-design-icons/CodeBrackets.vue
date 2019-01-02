<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon code-brackets-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M15,4V6H18V18H15V20H20V4M4,4V20H9V18H6V6H9V4H4Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CodeBracketsIcon",
  props: {
    title: {
      type: String,
      default: "Code Brackets icon"
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
