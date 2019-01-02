<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon message-reply-text-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4C22,2.9 21.1,2 20,2H4C2.9,2 2,2.9 2,4V16C2,17.1 2.9,18 4,18H18L22,22V4Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MessageReplyTextIcon",
  props: {
    title: {
      type: String,
      default: "Message Reply Text icon"
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
