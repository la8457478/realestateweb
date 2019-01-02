<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon numeric4-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,7V13H13V17H15V7H13V11H11V7H9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "Numeric4Icon",
  props: {
    title: {
      type: String,
      default: "Numeric4 icon"
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
