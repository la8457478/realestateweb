<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon less-than-or-equal-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M18.5,2.27L5,10.14L18.5,18L19.5,16.27L8.97,10.14L19.5,4L18.5,2.27M5,20V22H20V20H5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "LessThanOrEqualIcon",
  props: {
    title: {
      type: String,
      default: "Less Than Or Equal icon"
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
