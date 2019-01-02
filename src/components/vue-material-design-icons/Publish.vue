<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon publish-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,4V6H19V4H5M5,14H9V20H15V14H19L12,7L5,14Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PublishIcon",
  props: {
    title: {
      type: String,
      default: "Publish icon"
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
