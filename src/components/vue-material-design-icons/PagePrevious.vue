<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon page-previous-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M4,21H19C20.1,21 21,20.1 21,19V13H17V15L13,12L17,9V11H21V5C21,3.9 20.1,3 19,3H4C2.9,3 2,3.9 2,5V19C2,20.1 2.9,21 4,21M4,15H8V17H4V15M4,11H11V13H4V11M4,7H11V9H4V7M21,11H24V13H21V11Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PagePreviousIcon",
  props: {
    title: {
      type: String,
      default: "Page Previous icon"
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
