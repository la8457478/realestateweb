<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon email-mark-as-unread-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M18.84,7H16.22L10.5,4L4,7.41V17C2.9,17 2,16.1 2,15V7.17C2,6.5 2.28,6.06 2.81,5.81L10.5,2L18.05,5.81C18.5,6.09 18.78,6.5 18.84,7M7,8H20C21.1,8 22,8.9 22,10V19C22,20.1 21.1,21 20,21H7C5.9,21 5,20.1 5,19V10C5,8.9 5.9,8 7,8M20,11.67V10L13.5,13.31L7,10V11.67L13.5,15L20,11.67Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "EmailMarkAsUnreadIcon",
  props: {
    title: {
      type: String,
      default: "Email Mark As Unread icon"
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
