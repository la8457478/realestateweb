<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon black-mesa-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,4C7.58,4 4,7.58 4,12C4,14.39 5.05,16.53 6.71,18H9V12H17L19.15,15.59C19.69,14.5 20,13.29 20,12C20,7.58 16.42,4 12,4Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BlackMesaIcon",
  props: {
    title: {
      type: String,
      default: "Black Mesa icon"
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
