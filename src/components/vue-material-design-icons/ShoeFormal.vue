<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon shoe-formal-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M21.5,9V8H20.5L19.5,9H15L14,8H13L7,12H4C2.9,12 2,12.9 2,14V16H10L13,15H15V16H21.5V14C21.5,14 22,13 22,11.5C22,10 21.5,9 21.5,9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ShoeFormalIcon",
  props: {
    title: {
      type: String,
      default: "Shoe Formal icon"
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
