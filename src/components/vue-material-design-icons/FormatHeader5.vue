<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon format-header5-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H20V6H15V10H17C19.21,10 21,11.79 21,14C21,16.21 19.21,18 17,18H15C13.9,18 13,17.1 13,16V15H15V16H17C18.1,16 19,15.1 19,14C19,12.9 18.1,12 17,12H15C13.9,12 13,11.1 13,10V6C13,4.9 13.9,4 15,4Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FormatHeader5Icon",
  props: {
    title: {
      type: String,
      default: "Format Header5 icon"
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
