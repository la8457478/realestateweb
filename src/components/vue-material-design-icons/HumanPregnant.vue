<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon human-pregnant-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,4C9,2.89 9.89,2 11,2C12.11,2 13,2.89 13,4C13,5.11 12.11,6 11,6C9.89,6 9,5.11 9,4M16,13C16,11.66 15.17,10.5 14,10C14,8.34 12.66,7 11,7C9.34,7 8,8.34 8,10V17H10V22H13V17H16V13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HumanPregnantIcon",
  props: {
    title: {
      type: String,
      default: "Human Pregnant icon"
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
