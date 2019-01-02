<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon eject-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,5L5.33,15H18.67M5,17H19V19H5V17Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "EjectIcon",
  props: {
    title: {
      type: String,
      default: "Eject icon"
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
