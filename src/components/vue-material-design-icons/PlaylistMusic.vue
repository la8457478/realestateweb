<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon playlist-music-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M15,6H3V8H15V6M15,10H3V12H15V10M3,16H11V14H3V16M17,6V14.18C16.69,14.07 16.35,14 16,14C14.34,14 13,15.34 13,17C13,18.66 14.34,20 16,20C17.66,20 19,18.66 19,17V8H22V6H17Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PlaylistMusicIcon",
  props: {
    title: {
      type: String,
      default: "Playlist Music icon"
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
