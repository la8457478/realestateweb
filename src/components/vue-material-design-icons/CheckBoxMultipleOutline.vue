<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon check-box-multiple-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M20,2H8C6.9,2 6,2.9 6,4V16C6,17.1 6.9,18 8,18H20C21.1,18 22,17.1 22,16V4C22,2.9 21.1,2 20,2M20,16H8V4H20V16M16,20V22H4C2.9,22 2,21.1 2,20V7H4V20H16M18.53,8.06L17.47,7L12.59,11.88L10.47,9.76L9.41,10.82L12.59,14L18.53,8.06Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CheckBoxMultipleOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Check Box Multiple Outline icon"
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
