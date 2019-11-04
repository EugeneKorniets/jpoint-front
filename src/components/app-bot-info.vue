<template>
  <div class="app-bot-info">
    <div class="app-bot-info__content">
      <div class="app-bot-info__left-side">
        <p class="app-bot-info__text">Участвуй в конкурсе</p>
        <p class="app-bot-info__highlight">sm_lab_bot</p>
      </div>
      <div class="app-bot-info__right-side">
        <img class="app-bot-info__qr-code" src="../assets/image/sm-lab-bot.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-bot-info'
  }
</script>

<style lang="scss">
  .app-bot-info {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 450px;
    height: 205px;
    border-top-left-radius: 10px;
    background-color: #333435;

    &__content {
      display: flex;
      width: 96%;
      height: 100%;
      margin-left: auto;
      padding: 35px 0 35px 10px;
      box-sizing: border-box;
      border: 1px solid #333435;
      border-top-left-radius: 10px;
      background-color: white;
    }

    &__left-side {
      width: 240px;
      padding: 0 26px 0 0;
      text-align: right;
      transform: skew(20deg);
    }

    &__text {
      margin: 6px 0 35px 50px;
      font-size: 20px;
      line-height: 23px;
    }

    &__highlight {
      position: relative;
      padding: 0 0 0 33px;
      color: #4c7da3;
      font-size: 30px;
      line-height: 33px;
      font-weight: bold;

      &::before {
        content: '';
        position: absolute;
        top: 2px;
        left: 0;
        width: 33px;
        height: 33px;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3e%3cg fill='none' fill-rule='nonzero'%3e%3ccircle cx='18' cy='18' r='18' fill='%23437197'/%3e%3cpath fill='%23FFF' d='M24.933 12.558L20.073 26.2a1.21 1.21 0 0 1-2.221.135l-2.594-5.17a1.077 1.077 0 0 0-.485-.483l-5.068-2.51a1.26 1.26 0 0 1 .143-2.323l13.585-4.782a1.176 1.176 0 0 1 1.5.712c.09.253.09.529 0 .782'/%3e%3c/g%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-size: 100%;
      }
    }

    &__right-side {
      width: 132px;
      transform: skew(20deg);
    }

    &__qr-code {
      display: block;
      width: 100%;
      height: auto;
    }
  }
</style>
