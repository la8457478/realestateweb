<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon printer-settings-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M18,2V6H6V2H18M19,11C19.55,11 20,10.55 20,10C20,9.45 19.55,9 19,9C18.45,9 18,9.45 18,10C18,10.55 18.45,11 19,11M16,18V13H8V18H16M19,7C20.66,7 22,8.34 22,10V16H18V20H6V16H2V10C2,8.34 3.34,7 5,7H19M15,24V22H17V24H15M11,24V22H13V24H11M7,24V22H9V24H7Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PrinterSettingsIcon",
  props: {
    title: {
      type: String,
      default: "Printer Settings icon"
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
