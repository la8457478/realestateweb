<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon cellphone-settings-variant-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9.82,12.5C9.84,12.33 9.86,12.17 9.86,12C9.86,11.83 9.84,11.67 9.82,11.5L10.9,10.69C11,10.62 11,10.5 10.96,10.37L9.93,8.64C9.87,8.53 9.73,8.5 9.62,8.53L8.34,9.03C8.07,8.83 7.78,8.67 7.47,8.54L7.27,7.21C7.27,7.09 7.16,7 7.03,7H5C4.85,7 4.74,7.09 4.72,7.21L4.5,8.53C4.21,8.65 3.92,8.83 3.65,9L2.37,8.5C2.25,8.47 2.12,8.5 2.06,8.63L1.03,10.36C0.97,10.5 1,10.61 1.1,10.69L2.18,11.5C2.16,11.67 2.15,11.84 2.15,12C2.15,12.17 2.17,12.33 2.19,12.5L1.1,13.32C1,13.39 1,13.53 1.04,13.64L2.07,15.37C2.13,15.5 2.27,15.5 2.38,15.5L3.66,15C3.93,15.18 4.22,15.34 4.53,15.47L4.73,16.79C4.74,16.91 4.85,17 5,17H7.04C7.17,17 7.28,16.91 7.29,16.79L7.5,15.47C7.8,15.35 8.09,15.17 8.36,15L9.64,15.5C9.76,15.53 9.89,15.5 9.95,15.37L11,13.64C11.04,13.53 11,13.4 10.92,13.32L9.82,12.5M6,13.75C5,13.75 4.2,12.97 4.2,12C4.2,11.03 5,10.25 6,10.25C7,10.25 7.8,11.03 7.8,12C7.8,12.97 7,13.75 6,13.75M17,1H7C5.9,1 5,1.9 5,3V6H7V4H17V20H7V18H5V21C5,22.1 5.9,23 7,23H17C18.1,23 19,22.1 19,21V3C19,1.9 18.1,1 17,1Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CellphoneSettingsVariantIcon",
  props: {
    title: {
      type: String,
      default: "Cellphone Settings Variant icon"
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
