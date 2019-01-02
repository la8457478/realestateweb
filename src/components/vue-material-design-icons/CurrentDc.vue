<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon current-dc-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2,9V11H22V9H2M2,13V15H6V13H2M10,13V15H14V13H10M18,13V15H22V13H18Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CurrentDcIcon",
  props: {
    title: {
      type: String,
      default: "Current Dc icon"
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
