<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon tent-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M4,6C4,7.19 4.39,8.27 5,9C3.34,9 2,7.66 2,6C2,4.34 3.34,3 5,3C4.39,3.73 4,4.81 4,6M2,21V19H4.76L12,4.78L19.24,19H22V21H2M12,9.19L7,19H17L12,9.19Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TentIcon",
  props: {
    title: {
      type: String,
      default: "Tent icon"
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
