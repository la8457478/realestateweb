<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon lock-clock-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M8.5,2C6,2 4,4 4,6.5V7C2.89,7 2,7.89 2,9V18C2,19.11 2.89,20 4,20H8.72C10.18,21.29 12.06,22 14,22C18.42,22 22,18.42 22,14C22,9.58 18.42,6 14,6C13.66,6 13.32,6.03 13,6.08C12.76,3.77 10.82,2 8.5,2M8.5,4C9.88,4 11,5.12 11,6.5V7H6V6.5C6,5.12 7.12,4 8.5,4M14,8C17.31,8 20,10.69 20,14C20,17.31 17.31,20 14,20C10.69,20 8,17.31 8,14C8,10.69 10.69,8 14,8M13,10V15L16.64,17.19L17.42,15.9L14.5,14.15V10H13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "LockClockIcon",
  props: {
    title: {
      type: String,
      default: "Lock Clock icon"
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
