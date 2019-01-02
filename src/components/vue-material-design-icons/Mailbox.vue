<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon mailbox-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M20,6H10V12H8V4H14V0H6V6H4C2.9,6 2,6.9 2,8V20C2,21.1 2.9,22 4,22H20C21.1,22 22,21.1 22,20V8C22,6.9 21.1,6 20,6Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MailboxIcon",
  props: {
    title: {
      type: String,
      default: "Mailbox icon"
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
