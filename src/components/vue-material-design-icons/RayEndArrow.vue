<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon ray-end-arrow-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M1,12L5,16V13H17.17C17.58,14.17 18.69,15 20,15C21.66,15 23,13.66 23,12C23,10.34 21.66,9 20,9C18.69,9 17.58,9.83 17.17,11H5V8L1,12Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "RayEndArrowIcon",
  props: {
    title: {
      type: String,
      default: "Ray End Arrow icon"
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
