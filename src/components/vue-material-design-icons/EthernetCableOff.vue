<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon ethernet-cable-off-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M11,3H13V7H11V3M8,4H10V8H14V4H16V11H12.82L8,6.18V4M20,20.72L18.73,22L14,17.27V22H10V13.27L2,5.27L3.28,4L20,20.72Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "EthernetCableOffIcon",
  props: {
    title: {
      type: String,
      default: "Ethernet Cable Off icon"
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
