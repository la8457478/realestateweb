<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon inbox-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,15H15C15,16.66 13.66,18 12,18C10.34,18 9,16.66 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "InboxIcon",
  props: {
    title: {
      type: String,
      default: "Inbox icon"
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
