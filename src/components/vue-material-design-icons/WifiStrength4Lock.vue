<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon wifi-strength4-lock-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,3C7.79,3 3.7,4.42 0.38,7C4.42,12.06 7.89,16.37 12,21.5C13.23,19.97 14.29,18.66 15.5,17.14V14.5C15.5,11.74 17.74,9.5 20.5,9.5C20.85,9.5 21.2,9.54 21.54,9.62C22.2,8.8 23.03,7.76 23.65,7C20.32,4.41 16.22,3 12,3M20.5,12C19.1,12 18,13.1 18,14.5V16C17.5,16 17,16.5 17,17V21C17,21.5 17.5,22 18,22H23C23.5,22 24,21.5 24,21V17C24,16.5 23.5,16 23,16V14.5C23,13.1 21.9,12 20.5,12M20.5,13C21.3,13 22,13.7 22,14.5V16H19V14.5C19,13.7 19.7,13 20.5,13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "WifiStrength4LockIcon",
  props: {
    title: {
      type: String,
      default: "Wifi Strength4 Lock icon"
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
