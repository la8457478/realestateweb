<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon message-settings-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M20,2H4C2.9,2 2,2.9 2,4V22L6,18H20C21.1,18 22,17.1 22,16V4C22,2.9 21.1,2 20,2M11,24H13V22H11V24M7,24H9V22H7V24M15,24H17V22H15V24Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MessageSettingsIcon",
  props: {
    title: {
      type: String,
      default: "Message Settings icon"
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
