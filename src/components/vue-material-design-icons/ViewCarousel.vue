<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon view-carousel-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M18,6V17H22V6M2,17H6V6H2M7,19H17V4H7V19Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ViewCarouselIcon",
  props: {
    title: {
      type: String,
      default: "View Carousel icon"
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
