<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon ticket-account-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M20,12C20,13.1 20.9,14 22,14V18C22,19.1 21.1,20 20,20H4C2.9,20 2,19.1 2,18V14C3.11,14 4,13.1 4,12C4,10.9 3.1,10 2,10V6C2,4.89 2.9,4 4,4H20C21.1,4 22,4.9 22,6V10C20.9,10 20,10.9 20,12M16.5,16.25C16.5,14.75 13.5,14 12,14C10.5,14 7.5,14.75 7.5,16.25V17H16.5V16.25M12,12.25C13.24,12.25 14.25,11.24 14.25,10C14.25,8.76 13.24,7.75 12,7.75C10.76,7.75 9.75,8.76 9.75,10C9.75,11.24 10.76,12.25 12,12.25Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TicketAccountIcon",
  props: {
    title: {
      type: String,
      default: "Ticket Account icon"
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
