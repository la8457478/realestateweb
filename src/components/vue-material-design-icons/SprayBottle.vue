<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon spray-bottle-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,7H15C15.66,7.64 16,8.31 16,9V22H8V15C8,14.72 8.11,14.39 8.3,14L12,7M16,4L15,6H12V5L10,7H9L10,5V4H9V2H14.5C15.33,2 16,2.67 16,3.5V4Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SprayBottleIcon",
  props: {
    title: {
      type: String,
      default: "Spray Bottle icon"
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
