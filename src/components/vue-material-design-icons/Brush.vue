<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon brush-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14C5.34,14 4,15.34 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21C8.21,21 10,19.21 10,17C10,15.34 8.66,14 7,14Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BrushIcon",
  props: {
    title: {
      type: String,
      default: "Brush icon"
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
