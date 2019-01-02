<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon alpha-j-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M13,7V15H11V14H9V15C9,16.1 9.9,17 11,17H13C14.1,17 15,16.1 15,15V7H13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlphaJIcon",
  props: {
    title: {
      type: String,
      default: "Alpha J icon"
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
