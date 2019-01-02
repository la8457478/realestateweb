<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon floor-lamp-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M15,2L17,9H7L9,2M11,10H13V20H16V22H8V20H11V10Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FloorLampIcon",
  props: {
    title: {
      type: String,
      default: "Floor Lamp icon"
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
