<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon bottle-wine-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M10,22C9.45,22 9,21.55 9,21V11C9,9 10,7.25 11,7V2.5C11,2.22 11.22,2 11.5,2H12.5C12.78,2 13,2.22 13,2.5V7C14,7.25 15,9 15,11V21C15,21.55 14.55,22 14,22H10Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BottleWineIcon",
  props: {
    title: {
      type: String,
      default: "Bottle Wine icon"
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
