<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon arrow-right-bold-box-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,19V5C3,3.9 3.9,3 5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19M17,12L12,7V10H8V14H12V17L17,12Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ArrowRightBoldBoxIcon",
  props: {
    title: {
      type: String,
      default: "Arrow Right Bold Box icon"
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
