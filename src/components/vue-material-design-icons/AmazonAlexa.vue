<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon amazon-alexa-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M10.43,21.87V19.91C10.43,19.22 10,18.57 9.35,18.3C6.91,17.26 5.17,14.83 5.17,12C5.17,8.26 8.22,5.17 12,5.17C15.78,5.17 18.83,8.26 18.83,12C18.83,16.43 15.39,20.61 10.43,21.87Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AmazonAlexaIcon",
  props: {
    title: {
      type: String,
      default: "Amazon Alexa icon"
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
