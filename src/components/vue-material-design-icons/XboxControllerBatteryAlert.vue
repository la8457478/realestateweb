<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon xbox-controller-battery-alert-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M21,19V7H15V19H21M21.67,5C22.4,5 23,5.6 23,6.33V19.67C23,20.4 22.4,21 21.67,21H14.33C13.6,21 13,20.4 13,19.67V16.75H7.75C5.75,16.75 5,19 3,20C1,20 -0.5,17 3.5,8.5H3.75L4.19,7.67C4.19,7.67 7,6 8.33,7.23H13V6.33C13,5.6 13.6,5 14.33,5H16V3H20V5H21.67M11,8C10.45,8 10,8.45 10,9C10,9.55 10.45,10 11,10C11.55,10 12,9.55 12,9C12,8.45 11.55,8 11,8M17,9H19V14H17V9M17,15H19V17H17V15Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "XboxControllerBatteryAlertIcon",
  props: {
    title: {
      type: String,
      default: "Xbox Controller Battery Alert icon"
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
