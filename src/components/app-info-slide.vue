<template>
  <div class="info-slide">
    <h2 class="info-slide__heading">Конкурс &mdash; участвуй, решай, побеждай!</h2>
    <div class="info-slide__image-wrapper">
      <div class="info-slide__card info-slide__card--1"></div>
      <div class="info-slide__card info-slide__card--2"></div>
      <div class="info-slide__card info-slide__card--3"></div>
    </div>
    <div class="info-slide__wrapper">
      <p class="info-slide__main-text-block">За наибольшее количество решенных задач вы получите Подарочную карту "Спортмастер" на 10 000 р.</p>
      <p class="info-slide__main-text-block">Если вы окажетесь на втором и третьем месте в нашей турнирной таблице,
        <br>вы получите Подарочную карту "Спортмастер" на 5 000 р.</p>
    </div>
    <div class="info-slide__foot-note">
      <div class="qr-code">
        <div class="qr-code__image">
          <img src="../assets/image/barcode@3x.png" alt="">
        </div>
        <div class="qr-code__text-block">
          <p>Полные правила использования карты: <br><a href="https://www.sportmaster.ru/giftcard/#rules">https://www.sportmaster.ru/giftcard/#rules</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-info-slide'
  }
</script>

<style lang="scss">
  .info-slide {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    &__heading {
      font-size: 54px;
      text-align: center;
    }

    &__wrapper {

    }

    &__image-wrapper {
      display: flex;
      justify-content: center;
      margin: 80px 0;
      transform: skew(20deg);
    }

    &__card {
      width: 280px;
      height: 182px;
      margin: 0 66px;
      background-repeat: no-repeat;
      background-size: 100%;

      &--1 {
        background-image: url("../assets/image/group-2@3x.png");
      }

      &--2 {
        background-image: url("../assets/image/group-3@3x.png");
      }

      &--3 {
        background-image: url("../assets/image/group-4@3x.png");
      }
    }

    &__main-text-block {
      font-size: 30px;
      text-align: center;
    }

    &__foot-note {
      position: relative;

      & p {
        margin: 4px 0;
      }
    }
  }

  .qr-code {
    display: flex;
    align-items: center;
    padding: 20px;
    font-size: 30px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 4px;

    &__text-block {
      padding: 0 0 0 30px;
    }

    &__image {
      width: 180px;
      margin: 0 10px;
      padding: 10px 24px;

      & img {
        width: 100%;
        transform: skew(20deg);
      }
    }
  }
</style>
