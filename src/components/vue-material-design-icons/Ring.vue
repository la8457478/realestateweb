<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon ring-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,10L8,4.4L9.6,2H14.4L16,4.4L12,10M15.5,6.8L14.3,8.5C16.5,9.4 18,11.5 18,14C18,17.31 15.31,20 12,20C8.69,20 6,17.31 6,14C6,11.5 7.5,9.4 9.7,8.5L8.5,6.8C5.8,8.1 4,10.8 4,14C4,18.42 7.58,22 12,22C16.42,22 20,18.42 20,14C20,10.8 18.2,8.1 15.5,6.8Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "RingIcon",
  props: {
    title: {
      type: String,
      default: "Ring icon"
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
