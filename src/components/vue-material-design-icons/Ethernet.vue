<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon ethernet-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M7,15H9V18H11V15H13V18H15V15H17V18H19V9H15V6H9V9H5V18H7V15M4.38,3H19.63C20.94,3 22,4.06 22,5.38V19.63C22,20.94 20.94,22 19.63,22H4.38C3.06,22 2,20.94 2,19.63V5.38C2,4.06 3.06,3 4.38,3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "EthernetIcon",
  props: {
    title: {
      type: String,
      default: "Ethernet icon"
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
