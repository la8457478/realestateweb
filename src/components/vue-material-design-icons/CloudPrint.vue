<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon cloud-print-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,2C9.11,2 6.6,3.64 5.35,6.04C2.34,6.36 0,8.91 0,12C0,15.31 2.69,18 6,18V22H18V18H19C21.76,18 24,15.76 24,13C24,10.36 21.95,8.22 19.35,8.04C18.67,4.59 15.64,2 12,2M8,13H16V20H8V13M9,14V15H15V14H9M9,16V17H15V16H9M9,18V19H15V18H9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CloudPrintIcon",
  props: {
    title: {
      type: String,
      default: "Cloud Print icon"
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
