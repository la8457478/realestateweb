<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon unfold-less-vertical-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5.41,7.41L10,12L5.41,16.59L4,15.17L7.17,12L4,8.83L5.41,7.41M18.59,16.59L14,12L18.59,7.42L20,8.83L16.83,12L20,15.17L18.59,16.59Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "UnfoldLessVerticalIcon",
  props: {
    title: {
      type: String,
      default: "Unfold Less Vertical icon"
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
