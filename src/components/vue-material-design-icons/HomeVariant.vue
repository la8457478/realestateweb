<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon home-variant-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,3L20,9V21H15V14H9V21H4V9L12,3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HomeVariantIcon",
  props: {
    title: {
      type: String,
      default: "Home Variant icon"
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
