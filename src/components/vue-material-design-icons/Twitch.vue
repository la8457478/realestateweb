<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon twitch-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M4,2H22V14L17,19H13L10,22H7V19H2V6L4,2M20,13V4H6V16H9V19L12,16H17L20,13M15,7H17V12H15V7M12,7V12H10V7H12Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TwitchIcon",
  props: {
    title: {
      type: String,
      default: "Twitch icon"
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
