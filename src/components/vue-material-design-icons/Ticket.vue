<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon ticket-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M15.58,16.8L12,14.5L8.42,16.8L9.5,12.68L6.21,10L10.46,9.74L12,5.8L13.54,9.74L17.79,10L14.5,12.68M20,12C20,10.89 20.9,10 22,10V6C22,4.89 21.1,4 20,4H4C2.9,4 2,4.9 2,6V10C3.11,10 4,10.9 4,12C4,13.1 3.1,14 2,14V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V14C20.9,14 20,13.1 20,12Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TicketIcon",
  props: {
    title: {
      type: String,
      default: "Ticket icon"
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
