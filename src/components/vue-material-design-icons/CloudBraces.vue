<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon cloud-braces-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M6,20C2.69,20 0,17.31 0,14C0,10.91 2.34,8.36 5.35,8.04C6.6,5.64 9.11,4 12,4C15.63,4 18.66,6.58 19.35,10C21.95,10.19 24,12.36 24,15C24,17.76 21.76,20 19,20H6M18.5,12H18C17.45,12 17,11.55 17,11V10C17,8.9 16.1,8 15,8H13.5V10H15V11C15,12.1 15.9,13 17,13C15.9,13 15,13.9 15,15V16H13.5V18H15C16.1,18 17,17.1 17,16V15C17,14.45 17.45,14 18,14H18.5V12M5.5,12V14H6C6.55,14 7,14.45 7,15V16C7,17.1 7.9,18 9,18H10.5V16H9V15C9,13.9 8.1,13 7,13C8.1,13 9,12.1 9,11V10H10.5V8H9C7.9,8 7,8.9 7,10V11C7,11.55 6.55,12 6,12H5.5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CloudBracesIcon",
  props: {
    title: {
      type: String,
      default: "Cloud Braces icon"
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
