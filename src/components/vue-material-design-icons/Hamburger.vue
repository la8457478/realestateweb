<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon hamburger-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2,16H22V18C22,19.11 21.11,20 20,20H4C2.89,20 2,19.11 2,18V16M6,4H18C20.22,4 22,5.78 22,8V10H2V8C2,5.78 3.78,4 6,4M4,11H15L17,13L19,11H20C21.11,11 22,11.89 22,13C22,14.11 21.11,15 20,15H4C2.89,15 2,14.11 2,13C2,11.89 2.89,11 4,11Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HamburgerIcon",
  props: {
    title: {
      type: String,
      default: "Hamburger icon"
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
