<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon alpha-s-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M11,7C9.9,7 9,7.9 9,9V11C9,12.1 9.9,13 11,13H13V15H9V17H13C14.1,17 15,16.1 15,15V13C15,11.9 14.1,11 13,11H11V9H15V7H11Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlphaSIcon",
  props: {
    title: {
      type: String,
      default: "Alpha S icon"
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
