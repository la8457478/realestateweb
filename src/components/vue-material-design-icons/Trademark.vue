<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon trademark-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9.8,8.44H6.87V16H4.89V8.44H2V7H9.8V8.44M13.5,7L15.96,13.5L18.41,7H21V16H19V13.5L19.22,9.24L16.63,16H15.28L12.7,9.25L12.9,13.5V16H10.93V7H13.5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TrademarkIcon",
  props: {
    title: {
      type: String,
      default: "Trademark icon"
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
