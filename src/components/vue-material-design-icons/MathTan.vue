<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon math-tan-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2,7V9H4V17H6V9H8V7H2M11,7C9.9,7 9,7.9 9,9V17H11V13H13V17H15V9C15,7.9 14.1,7 13,7H11M11,9H13V11H11V9M16,7V17H18V12L20,17H22V7H20V12L18,7H16Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MathTanIcon",
  props: {
    title: {
      type: String,
      default: "Math Tan icon"
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
