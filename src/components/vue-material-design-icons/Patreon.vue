<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon patreon-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M14.73,3C18.45,3 21.47,6.03 21.47,9.76C21.47,13.47 18.45,16.5 14.73,16.5C11,16.5 7.97,13.47 7.97,9.76C7.97,6.03 11,3 14.73,3M2.7,21V3H6V21H2.7Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PatreonIcon",
  props: {
    title: {
      type: String,
      default: "Patreon icon"
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
