<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon alert-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlertIcon",
  props: {
    title: {
      type: String,
      default: "Alert icon"
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
