<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon rhombus-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M21.5,10.8L13.2,2.5C12.5,1.8 11.5,1.8 10.8,2.5L2.5,10.8C1.8,11.5 1.8,12.5 2.5,13.2L10.8,21.5C11.5,22.2 12.5,22.2 13.2,21.5L21.5,13.2C22.1,12.5 22.1,11.5 21.5,10.8Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "RhombusIcon",
  props: {
    title: {
      type: String,
      default: "Rhombus icon"
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
