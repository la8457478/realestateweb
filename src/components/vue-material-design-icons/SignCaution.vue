<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon sign-caution-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2,3H22V13H18V21H16V13H8V21H6V13H2V3M18.97,11L20,9.97V7.15L16.15,11H18.97M13.32,11L19.32,5H16.5L10.5,11H13.32M7.66,11L13.66,5H10.83L4.83,11H7.66M5.18,5L4,6.18V9L8,5H5.18Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SignCautionIcon",
  props: {
    title: {
      type: String,
      default: "Sign Caution icon"
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
