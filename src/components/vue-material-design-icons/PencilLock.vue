<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon pencil-lock-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5.5,2C4.12,2 3,3.12 3,4.5V5C2.45,5 2,5.45 2,6V10C2,10.55 2.45,11 3,11H8C8.55,11 9,10.55 9,10V6C9,5.45 8.55,5 8,5V4.5C8,3.12 6.88,2 5.5,2M5.5,3C6.33,3 7,3.67 7,4.5V5H4V4.5C4,3.67 4.67,3 5.5,3M19.66,3C19.4,3 19.16,3.09 18.97,3.28L17.13,5.13L20.88,8.88L22.72,7.03C23.11,6.64 23.11,6 22.72,5.63L20.38,3.28C20.18,3.09 19.91,3 19.66,3M16.06,6.19L5,17.25V21H8.75L19.81,9.94L16.06,6.19Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PencilLockIcon",
  props: {
    title: {
      type: String,
      default: "Pencil Lock icon"
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
