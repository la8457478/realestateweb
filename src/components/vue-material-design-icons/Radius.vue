<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon radius-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M17,15V13H13.72C13.36,13.62 12.71,14 12,14C10.9,14 10,13.1 10,12C10,10.9 10.9,10 12,10C12.71,10 13.36,10.38 13.72,11H17V9L20,12L17,15Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "RadiusIcon",
  props: {
    title: {
      type: String,
      default: "Radius icon"
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
