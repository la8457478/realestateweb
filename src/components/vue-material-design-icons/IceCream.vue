<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon ice-cream-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,2C14.21,2 16,3.79 16,6.05C17.14,6.28 18,7.29 18,8.5C18,9.88 16.88,11 15.5,11H8.5C7.12,11 6,9.88 6,8.5C6,7.29 6.86,6.28 8,6C8,3.79 9.79,2 12,2M9,12H15L13,22H11L9,12Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "IceCreamIcon",
  props: {
    title: {
      type: String,
      default: "Ice Cream icon"
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
