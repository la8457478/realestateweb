<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon image-area-close-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,23L8,19H16L12,23M20,3C21.1,3 22,3.9 22,5V15C22,16.1 21.1,17 20,17H4C2.9,17 2,16.1 2,15V5C2,3.9 2.9,3 4,3H20M5,14H19L14.5,8L11,12.5L8.5,9.5L5,14Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ImageAreaCloseIcon",
  props: {
    title: {
      type: String,
      default: "Image Area Close icon"
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
