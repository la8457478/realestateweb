<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon twitter-retweet-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M6,5.75L10.25,10H7V16H13.5L15.5,18H7C5.9,18 5,17.1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17C18.1,6 19,6.9 19,8V14H22.25L18,18.25Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TwitterRetweetIcon",
  props: {
    title: {
      type: String,
      default: "Twitter Retweet icon"
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
