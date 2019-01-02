<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon chart-histogram-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,3H5V13H9V7H13V11H17V15H21V21H3V3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ChartHistogramIcon",
  props: {
    title: {
      type: String,
      default: "Chart Histogram icon"
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
