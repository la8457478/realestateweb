<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon human-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M21,9H15V22H13V16H11V22H9V9H3V7H21M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.89,6 10,5.1 10,4C10,2.89 10.89,2 12,2Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HumanIcon",
  props: {
    title: {
      type: String,
      default: "Human icon"
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
