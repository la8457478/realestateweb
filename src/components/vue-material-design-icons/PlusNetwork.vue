<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon plus-network-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M16,11V9H13V6H11V9H8V11H11V14H13V11H16M17,3C18.1,3 19,3.9 19,5V15C19,16.1 18.1,17 17,17H13V19H14C14.55,19 15,19.45 15,20H22V22H15C15,22.55 14.55,23 14,23H10C9.45,23 9,22.55 9,22H2V20H9C9,19.45 9.45,19 10,19H11V17H7C5.89,17 5,16.1 5,15V5C5,3.9 5.9,3 7,3H17Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PlusNetworkIcon",
  props: {
    title: {
      type: String,
      default: "Plus Network icon"
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
