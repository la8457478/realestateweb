<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon trackpad-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M4,3H20C21.1,3 22,3.9 22,5V19C22,20.1 21.1,21 20,21H4C2.9,21 2,20.1 2,19V5C2,3.9 2.9,3 4,3M4,5V13H20V5H4M4,19H11V15H4V19M20,19V15H13V19H20Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TrackpadIcon",
  props: {
    title: {
      type: String,
      default: "Trackpad icon"
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
