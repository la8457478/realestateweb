<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon menu-right-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M10,17L15,12L10,7V17Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MenuRightIcon",
  props: {
    title: {
      type: String,
      default: "Menu Right icon"
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
