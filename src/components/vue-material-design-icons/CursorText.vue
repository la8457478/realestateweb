<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon cursor-text-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M13,19C13,19.55 13.45,20 14,20H16V22H13.5C12.95,22 12,21.55 12,21C12,21.55 11.05,22 10.5,22H8V20H10C10.55,20 11,19.55 11,19V5C11,4.45 10.55,4 10,4H8V2H10.5C11.05,2 12,2.45 12,3C12,2.45 12.95,2 13.5,2H16V4H14C13.45,4 13,4.45 13,5V19Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CursorTextIcon",
  props: {
    title: {
      type: String,
      default: "Cursor Text icon"
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
