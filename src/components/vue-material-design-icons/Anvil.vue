<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon anvil-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,5V10C13.03,12.47 8.44,14.97 6,16V19H21V16C14.59,13.27 17.47,9 22,8V5H9M2,6C2.81,8.13 4.42,9.5 7,10V6H2Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AnvilIcon",
  props: {
    title: {
      type: String,
      default: "Anvil icon"
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
