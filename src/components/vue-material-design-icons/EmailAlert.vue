<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon email-alert-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M16,9V7L10,11L4,7V9L10,13L16,9M16,5C17.1,5 18,5.9 18,7V16C18,17.1 17.1,18 16,18H4C2.89,18 2,17.1 2,16V7C2,5.9 2.9,5 4,5H16M20,12V7H22V12H20M20,16V14H22V16H20Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "EmailAlertIcon",
  props: {
    title: {
      type: String,
      default: "Email Alert icon"
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
