<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon account-details-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M7.5,15C8.63,15 9.82,15.26 11.09,15.77C12.35,16.29 13,16.95 13,17.77V20H2V17.77C2,16.95 2.65,16.29 3.91,15.77C5.18,15.26 6.38,15 7.5,15M13,13H22V15H13V13M13,9H22V11H13V9M13,5H22V7H13V5M7.5,8C8.88,8 10,9.12 10,10.5C10,11.88 8.88,13 7.5,13C6.12,13 5,11.88 5,10.5C5,9.12 6.12,8 7.5,8Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AccountDetailsIcon",
  props: {
    title: {
      type: String,
      default: "Account Details icon"
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
