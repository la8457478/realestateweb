<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon relative-scale-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M20,18H4V6H20M20,4H4C2.89,4 2,4.89 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V6C22,4.89 21.1,4 20,4M12,10H10V12H12M8,10H6V12H8M16,14H14V16H16M16,10H14V12H16V10Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "RelativeScaleIcon",
  props: {
    title: {
      type: String,
      default: "Relative Scale icon"
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
