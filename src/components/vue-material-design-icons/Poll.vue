<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon poll-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,22V8H7V22H3M10,22V2H14V22H10M17,22V14H21V22H17Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PollIcon",
  props: {
    title: {
      type: String,
      default: "Poll icon"
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
