<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon currency-sign-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M22,12C22,9.86 21.29,7.78 20,6.07L22,4.07L19.94,1.94L17.94,3.94C14.4,1.36 9.59,1.38 6.07,4L4.07,2L1.94,4.06L3.94,6.06C1.36,9.6 1.38,14.41 4,17.93L2,19.93L4.12,22.05L6.12,20.05C9.65,22.65 14.45,22.65 18,20.05L20,22.05L22.1,19.93L20.1,17.93C21.35,16.21 22,14.13 22,12M12,19C8.13,19 5,15.87 5,12C5,8.13 8.13,5 12,5C15.87,5 19,8.13 19,12C19,15.87 15.87,19 12,19Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CurrencySignIcon",
  props: {
    title: {
      type: String,
      default: "Currency Sign icon"
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
