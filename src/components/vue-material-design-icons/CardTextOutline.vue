<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon card-text-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M20,20H4C2.9,20 2,19.1 2,18V6C2,4.9 2.9,4 4,4H20C21.1,4 22,4.9 22,6V18C22,19.1 21.1,20 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CardTextOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Card Text Outline icon"
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
