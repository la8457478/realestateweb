<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon high-definition-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,7H7V11H9V7H11V17H9V13H7V17H5V7M13,7H16C17.66,7 19,8.34 19,10V14C19,15.66 17.66,17 16,17H13V7M16,15C16.55,15 17,14.55 17,14V10C17,9.45 16.55,9 16,9H15V15H16Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HighDefinitionIcon",
  props: {
    title: {
      type: String,
      default: "High Definition icon"
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
