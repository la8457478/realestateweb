<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon printer-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M18,3H6V7H18M19,12C18.45,12 18,11.55 18,11C18,10.45 18.45,10 19,10C19.55,10 20,10.45 20,11C20,11.55 19.55,12 19,12M16,19H8V14H16M19,8H5C3.34,8 2,9.34 2,11V17H6V21H18V17H22V11C22,9.34 20.66,8 19,8Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PrinterIcon",
  props: {
    title: {
      type: String,
      default: "Printer icon"
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
