<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon watch-variant-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M8,0L7.17,5H7C5.9,5 5,5.9 5,7V17C5,18.11 5.9,19 7,19H7.17L8,24H16L16.83,19H17C18.1,19 19,18.1 19,17V7C19,5.89 18.1,5 17,5H16.83L16,0H8M7,7H17V17H7V7Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "WatchVariantIcon",
  props: {
    title: {
      type: String,
      default: "Watch Variant icon"
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
