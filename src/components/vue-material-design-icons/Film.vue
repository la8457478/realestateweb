<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon film-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3.5,3H5V1.8C5,1.36 5.36,1 5.8,1H10.2C10.64,1 11,1.36 11,1.8V3H12.5C13.33,3 14,3.67 14,4.5V5H22V20H14V20.5C14,21.33 13.33,22 12.5,22H3.5C2.67,22 2,21.33 2,20.5V4.5C2,3.67 2.67,3 3.5,3M18,7V9H20V7H18M14,7V9H16V7H14M10,7V9H12V7H10M14,16V18H16V16H14M18,16V18H20V16H18M10,16V18H12V16H10Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FilmIcon",
  props: {
    title: {
      type: String,
      default: "Film icon"
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
