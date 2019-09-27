<template>
  <div class="notification">
    <transition name="fade">
      <div
        class="alert"
        :class="{'alert-success': notification, 'alert-danger': error}"
        v-if="error || notification"
      >
        {{ error ? error : '' }}
        {{ notification ? notification : '' }}
        <button
          class="close"
          type="button"
          @click="emitCloseEvent"
        >
          <span>&times;</span>
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "app-notification",

    props: {
      error: {
        type: String
      },
      notification: {
        type: String
      }
    },

    methods: {
      emitCloseEvent () {
        this.$emit('close-event')
      }
    }
  }
</script>

<style lang="scss">
  .notification {
    position: fixed;
    top: 84px;
    right: 50px;
    width: 300px;
    padding-right: 28px;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
