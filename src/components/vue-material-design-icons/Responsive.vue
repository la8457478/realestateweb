<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon responsive-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M4,6V16H9V12C9,10.9 9.9,10 11,10H16C17.1,10 18,10.9 18,12V16H20V6H4M0,20V18H4C2.9,18 2,17.1 2,16V6C2,4.9 2.9,4 4,4H20C21.1,4 22,4.9 22,6V16C22,17.1 21.1,18 20,18H24V20H18V20C18,21.11 17.1,22 16,22H11C9.9,22 9,21.1 9,20H9L0,20M11.5,20C11.22,20 11,20.22 11,20.5C11,20.78 11.22,21 11.5,21C11.78,21 12,20.78 12,20.5C12,20.22 11.78,20 11.5,20M15.5,20C15.22,20 15,20.22 15,20.5C15,20.78 15.22,21 15.5,21C15.78,21 16,20.78 16,20.5C16,20.22 15.78,20 15.5,20M13,20V21H14V20H13M11,12V19H16V12H11Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ResponsiveIcon",
  props: {
    title: {
      type: String,
      default: "Responsive icon"
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
