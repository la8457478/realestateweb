<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon battery-minus-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M16.67,4C17.4,4 18,4.6 18,5.33V20.67C18,21.4 17.4,22 16.67,22H7.33C6.6,22 6,21.4 6,20.67V5.33C6,4.6 6.6,4 7.33,4H9V2H15V4H16.67M8,12V14H16V12">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BatteryMinusIcon",
  props: {
    title: {
      type: String,
      default: "Battery Minus icon"
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
