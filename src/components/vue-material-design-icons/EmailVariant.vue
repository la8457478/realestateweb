<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon email-variant-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,13L2,6.76V6C2,4.89 2.89,4 4,4H20C21.1,4 22,4.9 22,6V6.75L12,13M22,18C22,19.1 21.1,20 20,20H4C2.89,20 2,19.1 2,18V9.11L4,10.36V18H20V10.36L22,9.11V18Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "EmailVariantIcon",
  props: {
    title: {
      type: String,
      default: "Email Variant icon"
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
