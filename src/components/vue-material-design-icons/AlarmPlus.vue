<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon alarm-plus-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M13,9H11V12H8V14H11V17H13V14H16V12H13M12,20C8.13,20 5,16.87 5,13C5,9.13 8.13,6 12,6C15.87,6 19,9.13 19,13C19,16.87 15.87,20 12,20M12,4C7.03,4 3,8.03 3,13C3,17.97 7.03,22 12,22C16.97,22 21,17.97 21,13C21,8.03 16.97,4 12,4M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlarmPlusIcon",
  props: {
    title: {
      type: String,
      default: "Alarm Plus icon"
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
