<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon two-factor-authentication-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2,7V9H6V11H4C2.9,11 2,11.9 2,13V17H8V15H4V13H6C7.1,13 8,12.1 8,11V9C8,7.89 7.1,7 6,7H2M9,7V17H11V13H14V11H11V9H15V7H9M18,7C16.9,7 16,7.9 16,9V17H18V14H20V17H22V9C22,7.9 21.1,7 20,7H18M18,9H20V12H18V9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TwoFactorAuthenticationIcon",
  props: {
    title: {
      type: String,
      default: "Two Factor Authentication icon"
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
