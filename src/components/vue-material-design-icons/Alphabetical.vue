<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon alphabetical-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M6,11C7.1,11 8,11.9 8,13V17H4C2.9,17 2,16.1 2,15V13C2,11.9 2.9,11 4,11H6M4,13V15H6V13H4M20,13V15H22V17H20C18.9,17 18,16.1 18,15V13C18,11.9 18.9,11 20,11H22V13H20M12,7V11H14C15.1,11 16,11.9 16,13V15C16,16.1 15.1,17 14,17H12C10.9,17 10,16.1 10,15V7H12M12,15H14V13H12V15Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlphabeticalIcon",
  props: {
    title: {
      type: String,
      default: "Alphabetical icon"
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
