<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon alpha-b-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M15,10.5V9C15,7.9 14.1,7 13,7H9V17H13C14.1,17 15,16.1 15,15V13.5C15,12.7 14.3,12 13.5,12C14.3,12 15,11.3 15,10.5M13,15H11V13H13V15M13,11H11V9H13V11Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlphaBIcon",
  props: {
    title: {
      type: String,
      default: "Alpha B icon"
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
