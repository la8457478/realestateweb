<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon wifi-strength4-alert-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,3C7.79,3 3.7,4.41 0.38,7C4.41,12.06 7.89,16.37 12,21.5C14.45,18.45 16.68,15.68 19,12.78V8H22.84C23.09,7.7 23.41,7.29 23.65,7C20.32,4.41 16.22,3 12,3M21,10V18H23V10M21,20V22H23V20">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "WifiStrength4AlertIcon",
  props: {
    title: {
      type: String,
      default: "Wifi Strength4 Alert icon"
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
