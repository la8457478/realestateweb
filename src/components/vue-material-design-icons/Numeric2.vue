<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon numeric2-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,7V9H13V11H11C9.9,11 9,11.9 9,13V17H11L15,17V15H11V13H13C14.1,13 15,12.1 15,11V9C15,7.9 14.1,7 13,7H9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "Numeric2Icon",
  props: {
    title: {
      type: String,
      default: "Numeric2 icon"
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
