<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon book-open-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M13,12H20V13.5H13M13,9.5H20V11H13M13,14.5H20V16H13M21,4H3C1.9,4 1,4.9 1,6V19C1,20.1 1.9,21 3,21H21C22.1,21 23,20.1 23,19V6C23,4.9 22.1,4 21,4M21,19H12V6H21">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BookOpenIcon",
  props: {
    title: {
      type: String,
      default: "Book Open icon"
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
