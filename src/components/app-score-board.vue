<template>
  <div class="app-score-board">
    <ul class="app-score-board__main-list">
      <transition-group name="main-slide-fade">
        <li
          class="app-score-board__main-list-item"
          v-for="(item, index) in mainList"
          v-show="isShowBoard"
          :key="item.id"
        >
          <span class="app-score-board__main-list-rank">{{ index + 1 }}</span>
          <span class="app-score-board__main-list-nick">{{ item.nickname ? item.nickname : item.lastName + ' ' + item.firstName }}</span>
          <span class="app-score-board__main-list-points">{{ item.rating }}</span>
        </li>
      </transition-group>
    </ul>

    <transition-group
      name="add-slide-fade"
      tag="div"
      class="app-score-board__additional-block"
    >
      <ul
        class="app-score-board__additional-list"
        v-show="isShowBoard"
        :key="11"
      >
        <li
          class="app-score-board__additional-list-item"
          v-for="(item, index) in addList1"
          :key="item.id"
        >
          <span class="app-score-board__additional-list-rank">{{ index + 21 }} </span>
          <span class="app-score-board__main-list-nick">{{ item.nickname ? item.nickname : item.lastName + ' ' + item.firstName }}</span>
          <span class="app-score-board__additional-list-points">{{ item.rating }}</span>
        </li>
      </ul>

      <ul
        class="app-score-board__additional-list"
        v-if="isShowBoard"
        :key="12"
      >
        <li
          class="app-score-board__additional-list-item"
          v-for="(item, index) in addList2"
          :key="item.id"
        >
          <span class="app-score-board__additional-list-rank">{{ index + 51 }} </span>
          <span class="app-score-board__main-list-nick">{{ item.nickname ? item.nickname : item.lastName + ' ' + item.firstName }}</span>
          <span class="app-score-board__additional-list-points">{{ item.rating }}</span>
        </li>
      </ul>
    </transition-group>

    <transition name="bot-info-effect">
      <app-bot-info v-show="isShowBoard"/>
    </transition>
  </div>
</template>

<script>
  import AppBotInfo from '../components/app-bot-info'

  export default {
    name: 'app-score-board',

    components: {
      AppBotInfo
    },

    props: {
      mainList: {
        type: Array,
        default () {
          return []
        }
      },

      addList1: {
        type: Array,
        default () {
          return []
        }
      },

      addList2: {
        type: Array,
        default () {
          return []
        }
      },

      isShowBoard: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss">
  .app-score-board {
    display: flex;
    align-items: flex-start;

    &__main-list {
      width: 40.21739%;
      margin: 0 4.7554% 0 0;
      padding: 0;
      list-style: none;
    }

    &__additional-block {
      display: flex;
      align-items: flex-start;
      width: 56.11413%;

      & ul {
        width: 50%;
      }
    }

    &__main-list-item {
      display: flex;
      margin: 0 0 6px 0;
      padding: 6px 24px 6px 0;
      font-size: 2.7777vh;
      line-height: 3.0555vh;
      font-weight: bold;
      background-color: rgba(0,0,0,0.1);
    }

    &__main-list-rank {
      display: block;
      min-width: 50px;
      margin-right: 30px;
      text-align: right;
    }

    &__main-list-nick {
      display: block;
      flex-grow: 1;
      padding-right: 6px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    &__main-list-points {
      display: block;
    }

    &__additional-list {
      display: flex;
      flex-direction: column;
      max-height: 990px;
      margin: 5px 0 0 0;
      padding: 0;
      list-style: none;
    }

    &__additional-list-item {
      display: flex;
      margin: 0 6.4164% 5px 0;
      padding: 4px 24px 4px 0;
      font-size: 1.6666vh;
      line-height: 1.85188vh;
      background-color: rgba(0,0,0,0.1);
    }

    &__additional-list-rank {
      display: block;
      min-width: 36px;
      margin-right: 30px;
      padding-right: 6px;
      text-align: right;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    &__additional-list-nick {
      display: block;
      flex-grow: 1;
    }

    &__additional-list-points {
      display: block;
    }
  }

  // animations
  .main-slide {

    &-fade-enter-active {
      @for $i from 1 to 21 {
        &:nth-child(#{$i}) {
          transition: all #{$i * 0.1}s ease;
        }
      }
    }

    &-fade-enter {
      transform: translateX(20px);
      opacity: 0;
    }
  }

  .add-slide {

    &-fade-enter-active {
      @for $i from 1 to 3 {
        &:nth-child(#{$i}) {
          transition: all #{$i * 0.8}s ease 0.3s;
        }
      }
    }

    &-fade-enter {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  .bot-info-effect {

    &-enter {
      transform: translateX(2000px);

      &-active {
        transition: transform 0.6s;
      }

      &-to {
        transform: translateX(0);
      }
    }
  }
</style>
