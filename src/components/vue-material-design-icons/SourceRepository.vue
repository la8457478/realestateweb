<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon source-repository-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M6,2H18C19.1,2 20,2.9 20,4V20C20,21.1 19.1,22 18,22H6C4.9,22 4,21.1 4,20V4C4,2.9 4.9,2 6,2M12.75,13.5C15.5,13.5 16.24,11.47 16.43,10.4C17.34,10.11 18,9.26 18,8.25C18,7 17,6 15.75,6C14.5,6 13.5,7 13.5,8.25C13.5,9.19 14.07,10 14.89,10.33C14.67,11 14,12 12,12C10.62,12 9.66,12.35 9,12.84V8.87C9.87,8.56 10.5,7.73 10.5,6.75C10.5,5.5 9.5,4.5 8.25,4.5C7,4.5 6,5.5 6,6.75C6,7.73 6.63,8.56 7.5,8.87V15.13C6.63,15.44 6,16.27 6,17.25C6,18.5 7,19.5 8.25,19.5C9.5,19.5 10.5,18.5 10.5,17.25C10.5,16.32 9.94,15.5 9.13,15.18C9.41,14.5 10.23,13.5 12.75,13.5M8.25,16.5C8.66,16.5 9,16.84 9,17.25C9,17.66 8.66,18 8.25,18C7.84,18 7.5,17.66 7.5,17.25C7.5,16.84 7.84,16.5 8.25,16.5M8.25,6C8.66,6 9,6.34 9,6.75C9,7.16 8.66,7.5 8.25,7.5C7.84,7.5 7.5,7.16 7.5,6.75C7.5,6.34 7.84,6 8.25,6M15.75,7.5C16.16,7.5 16.5,7.84 16.5,8.25C16.5,8.66 16.16,9 15.75,9C15.34,9 15,8.66 15,8.25C15,7.84 15.34,7.5 15.75,7.5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SourceRepositoryIcon",
  props: {
    title: {
      type: String,
      default: "Source Repository icon"
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
