<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon card-bulleted-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M20,4C21.1,4 22,4.9 22,6V18C22,19.1 21.1,20 20,20H4C2.9,20 2,19.1 2,18V6C2,4.9 2.9,4 4,4H20M11,13H9V15H11V13M19,13H13V15H19V13M7,9H5V11H7V9M19,9H9V11H19V9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CardBulletedIcon",
  props: {
    title: {
      type: String,
      default: "Card Bulleted icon"
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
