<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon monitor-cellphone-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M23,11H18C17.45,11 17,11.45 17,12V21C17,21.55 17.45,22 18,22H23C23.55,22 24,21.55 24,21V12C24,11.45 23.55,11 23,11M23,20H18V13H23V20M20,2H2C0.89,2 0,2.89 0,4V16C0,17.1 0.9,18 2,18H9V20H7V22H15V20H13V18H15V16H2V4H20V9H22V4C22,2.89 21.1,2 20,2Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MonitorCellphoneIcon",
  props: {
    title: {
      type: String,
      default: "Monitor Cellphone icon"
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
