<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon menu-right-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,6H10.5L16.5,12L10.5,18H9V6M13.67,12L11,9.33V14.67L13.67,12Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MenuRightOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Menu Right Outline icon"
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
