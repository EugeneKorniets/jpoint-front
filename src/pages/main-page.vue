<template>
  <div class="main-page">
    <app-logo @click.native="toggleBlock"/>

    <app-logo-list class="main-page__logos"/>

    <transition name="slide-effect">
      <app-skew
        v-if="isActiveTable"
        :key="1"
      >
        <app-score-board
          :main-list="computedMainList"
          :add-list1="computedAdditionalList1"
          :add-list2="computedAdditionalList2"
          :is-show-board="isShowScoreBoard"
        />
      </app-skew>
    </transition>

    <transition name="slide-effect">
      <app-skew
        v-if="isActiveInfo"
        :key="2"
      >
        <app-info-slide/>
      </app-skew>
    </transition>
  </div>
</template>

<script>
  import axios from 'axios'
  import api from '../api/api'

  import AppLogo from '../components/app-logo'
  import AppLogoList from '../components/app-logo-list'
  import AppSkew from '../components/app-skew'
  import AppScoreBoard from '../components/app-score-board'
  import AppInfoSlide from '../components/app-info-slide'

  export default {
    name: "main-page",

    components: {
      AppLogo,
      AppLogoList,
      AppSkew,
      AppScoreBoard,
      AppInfoSlide
    },

    data: function () {
      return {
        mainList: [],

        isActiveTable: false,

        isActiveInfo: true,

        isShowScoreBoard: true,

        timeoutInfo: 5000,

        timeoutTable: 20000
      }
    },

    computed: {
      computedMainList () {
        let list = []
        for (let i = 0; i < 20; i++) {
          let item = {}
          item.id = this.mainList[i] ? this.mainList[i].id : i + 0.1
          item.nickname = this.mainList[i] ? this.mainList[i].nickname : ''
          item.lastName = this.mainList[i] ? this.mainList[i].surname : ''
          item.firstName = this.mainList[i] ? this.mainList[i].name : ''
          item.rating = this.mainList[i] ? this.mainList[i].score : ''
          list.push(item)
        }
        return list
      },

      computedAdditionalList1 () {
        let list = []
        for (let i = 20; i < 50; i++) {
          let item = {}
          item.id = this.mainList[i] ? this.mainList[i].id : i + 0.1
          item.nickname = this.mainList[i] ? this.mainList[i].nickname : ''
          item.lastName = this.mainList[i] ? this.mainList[i].surname : ''
          item.firstName = this.mainList[i] ? this.mainList[i].name : ''
          item.rating = this.mainList[i] ? this.mainList[i].score : ''
          list.push(item)
        }
        return list
      },

      computedAdditionalList2 () {
        let list = []
        for (let i = 50; i < 74; i++) {
          let item = {}
          item.id = this.mainList[i] ? this.mainList[i].id : i + 0.1
          item.nickname = this.mainList[i] ? this.mainList[i].nickname : ''
          item.lastName = this.mainList[i] ? this.mainList[i].surname : ''
          item.firstName = this.mainList[i] ? this.mainList[i].name : ''
          item.rating = this.mainList[i] ? this.mainList[i].score : ''
          list.push(item)
        }
        return list
      }
    },

    methods: {
      loadList () {
        return axios({
          url: `${api.host}${api.endpoints.results}`,
          method: 'GET'
        })
          .then((response) => {
            this.mainList = response.data
            return response
          })
          .catch((err) => {
            return err
          })
      },

      toggleBlock () {
        this.loadList()
        if (this.isActiveTable) {
          this.isActiveTable = false
          setTimeout(() => {
            this.isActiveInfo = true
          }, 380)
          setTimeout(() => {
            this.isShowScoreBoard = false
          }, 850)
        }
        if (this.isActiveInfo) {
          this.isActiveInfo = false
          setTimeout(() => {
            this.isActiveTable = true
          }, 380)
          setTimeout(() => {
            this.isShowScoreBoard = true
          }, 850)
        }
      },

      recursiveTimeout () {
        if (this.isActiveInfo) {
          setTimeout(() => {
            this.toggleBlock()
            this.recursiveTimeout()
          }, this.timeoutInfo)
        } else {
          setTimeout(() => {
            this.toggleBlock()
            this.recursiveTimeout()
          }, this.timeoutTable)
        }
      }
    },

    mounted () {
      this.recursiveTimeout()
    }
  }
</script>

<style lang="scss">
  .main-page {
    position: relative;
    width: 1920px;
    height: 1080px;
    /*background-color: #005aab;*/
    background-color: #333435;
    overflow: hidden;

    &__logos {
      position: absolute;
      right: 30px;
      bottom: 50px;
    }
  }

  // animation effect
  .slide-effect {

    &-enter {
      transform: skew(0) translateX(2000px);

      &-active {
        transition: transform 0.3s;
        animation: skew-slide-enter  0.5s ease-in;
      }

      &-to {
        //transform: skew(-20deg) translateX(0);
      }
    }

    &-leave {
      transform: skew(-20deg) translateX(0);

      &-active {
        transition: transform 0.3s;
        animation: skew-slide-leave  0.5s ease-out;
      }

      &-to {
        //transform: skew(-20deg) translateX(-2000px);
      }
    }
  }

  @keyframes skew-slide-enter {
    from {
      transform: skew(-20deg) translateX(2000px);
    }
    50% {
      transform: skew(-20deg) translateX(0);
    }
    60% {
      transform: skew(-19deg) translateX(0);
    }
    80% {
      transform: skew(-19deg) translateX(0);
    }
    100% {
      transform: skew(-20deg) translateX(0);
    }
  }

  @keyframes skew-slide-leave {
    from {
      transform: skew(-20deg) translateX(0);
    }
    10% {
      transform: skew(-21deg) translateX(0);
    }
    50% {
      transform: skew(-20deg) translateX(0);
    }
    100% {
      transform: skew(-20deg) translateX(-2000px);
    }
  }
</style>
