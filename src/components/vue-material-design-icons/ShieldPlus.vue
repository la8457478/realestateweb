<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon shield-plus-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,20V22.97H17V20H14V18H17V15H19V18H22V20H19M12,1L21,5V11C21,11.9 20.9,12.78 20.71,13.65C19.9,13.23 19,13 18,13C14.69,13 12,15.69 12,19C12,20.36 12.45,21.62 13.22,22.62L12,23C6.84,21.74 3,16.55 3,11V5L12,1Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ShieldPlusIcon",
  props: {
    title: {
      type: String,
      default: "Shield Plus icon"
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
