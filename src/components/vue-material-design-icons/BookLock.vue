<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon book-lock-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M18,2H12V9L9.5,7.5L7,9V2H6C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V4C20,2.9 19.1,2 18,2M18,20H10V16H11V15C11,13.34 12.34,12 14,12C15.66,12 17,13.34 17,15V16H18V20M15,15V16H13V15C13,14.45 13.45,14 14,14C14.55,14 15,14.45 15,15Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BookLockIcon",
  props: {
    title: {
      type: String,
      default: "Book Lock icon"
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
