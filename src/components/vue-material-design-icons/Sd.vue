<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon sd-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M18,8H16V4H18M15,8H13V4H15M12,8H10V4H12M18,2H10L4,8V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V4C20,2.9 19.1,2 18,2Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SdIcon",
  props: {
    title: {
      type: String,
      default: "Sd icon"
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
