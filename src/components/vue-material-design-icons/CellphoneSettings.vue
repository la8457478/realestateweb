<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon cellphone-settings-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M16,16H8V4H16M16,0H8C6.9,0 6,0.9 6,2V18C6,19.1 6.9,20 8,20H16C17.1,20 18,19.1 18,18V2C18,0.9 17.1,0 16,0M15,24H17V22H15M11,24H13V22H11M7,24H9V22H7V24Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CellphoneSettingsIcon",
  props: {
    title: {
      type: String,
      default: "Cellphone Settings icon"
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
