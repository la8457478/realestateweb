<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon ray-start-end-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M4,9C5.31,9 6.42,9.83 6.83,11H17.17C17.58,9.83 18.69,9 20,9C21.66,9 23,10.34 23,12C23,13.66 21.66,15 20,15C18.69,15 17.58,14.17 17.17,13H6.83C6.42,14.17 5.31,15 4,15C2.34,15 1,13.66 1,12C1,10.34 2.34,9 4,9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "RayStartEndIcon",
  props: {
    title: {
      type: String,
      default: "Ray Start End icon"
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
