<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon coffee-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13C4,15.21 5.79,17 8,17H14C16.21,17 18,15.21 18,13V10H20C21.1,10 22,9.1 22,8V5C22,3.89 21.1,3 20,3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CoffeeIcon",
  props: {
    title: {
      type: String,
      default: "Coffee icon"
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
