<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon card-bulleted-settings-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,22V24H7V22H9M13,22V24H11V22H13M17,22V24H15V22H17M12,15H10V13H12V15M18,15H14V13H18V15M8,11H6V9H8V11M18,11H10V9H18V11M20,20H4C2.9,20 2,19.1 2,18V6C2,4.9 2.9,4 4,4H20C21.1,4 22,4.9 22,6V18C22,19.1 21.1,20 20,20M4,6V18H20V6H4Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CardBulletedSettingsOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Card Bulleted Settings Outline icon"
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
