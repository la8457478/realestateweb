<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon server-network-off-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M13,19H14C14.55,19 15,19.45 15,20H15.73L13,17.27V19M22,20V21.18L20.82,20H22M21,22.72L19.73,24L17.73,22H15C15,22.55 14.55,23 14,23H10C9.45,23 9,22.55 9,22H2V20H9C9,19.45 9.45,19 10,19H11V17H4C3.45,17 3,16.55 3,16V12C3,11.45 3.45,11 4,11H6.73L4.73,9H4C3.45,9 3,8.55 3,8V7.27L1,5.27L2.28,4L21,22.72M4,3H20C20.55,3 21,3.45 21,4V8C21,8.55 20.55,9 20,9H9.82L7,6.18V5H5.82L3.84,3C3.89,3 3.94,3 4,3M20,11C20.55,11 21,11.45 21,12V16C21,16.55 20.55,17 20,17H17.82L11.82,11H20M9,7H10V5H9V7M9,15H10V14.27L9,13.27V15M5,13V15H7V13H5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ServerNetworkOffIcon",
  props: {
    title: {
      type: String,
      default: "Server Network Off icon"
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
