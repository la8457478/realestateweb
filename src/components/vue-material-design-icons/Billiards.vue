<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon billiards-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M11,13H13V15H11M11,9H13V11H11M11,17H13C14.1,17 15,16.1 15,15V13.5C15,12.67 14.33,12 13.5,12C14.33,12 15,11.33 15,10.5V9C15,7.9 14.1,7 13,7H11C9.9,7 9,7.9 9,9V10.5C9,11.33 9.67,12 10.5,12C9.67,12 9,12.67 9,13.5V15C9,16.1 9.9,17 11,17M12,1C5.92,1 1,5.92 1,12C1,18.08 5.92,23 12,23C18.08,23 23,18.08 23,12C23,5.92 18.08,1 12,1M12,19C8.13,19 5,15.87 5,12C5,8.13 8.13,5 12,5C15.87,5 19,8.13 19,12C19,15.87 15.87,19 12,19Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BilliardsIcon",
  props: {
    title: {
      type: String,
      default: "Billiards icon"
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
