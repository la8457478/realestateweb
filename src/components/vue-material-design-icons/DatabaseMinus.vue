<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon database-minus-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,3C4.58,3 1,4.79 1,7C1,9.21 4.58,11 9,11C13.42,11 17,9.21 17,7C17,4.79 13.42,3 9,3M1,9V12C1,14.21 4.58,16 9,16C13.42,16 17,14.21 17,12V9C17,11.21 13.42,13 9,13C4.58,13 1,11.21 1,9M1,14V17C1,19.21 4.58,21 9,21C10.41,21 11.79,20.81 13,20.46V17.46C11.79,17.81 10.41,18 9,18C4.58,18 1,16.21 1,14M15,17V19H23V17">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "DatabaseMinusIcon",
  props: {
    title: {
      type: String,
      default: "Database Minus icon"
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
