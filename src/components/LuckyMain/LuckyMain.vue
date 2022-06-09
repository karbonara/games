<template>
  <section class="lucky">
    <h1>Испытай удачу</h1>
    <div class="lucky__text">
      <p>
        Готов пойти на риск ? Всегда хотел испытать удачу ? <br />
        Тогда это именно то, что ты искал!
      </p>
      <RouterLink class="lucky__link" to="/faq-lucky">Подробнее</RouterLink>
    </div>
    <ul class="lucky__items">
      <li>
        <img :src="IconIndie" />
        <div class="lucky__item-title">INDIE - 59 РУБЛЕЙ</div>
        <div class="lucky__item-text">
          Наш премиальный рандом. За 125 рублей вы получите игру c большим
          шансом от бестселлера прошлых лет, до популярных игр с меньшим шансом
          вроде CS:GO, PUBG, RUST и другие в ценовом диапазоне 250р-800р. Здесь
          вы вы точно получите интересную для себя игру и даже попытаете удачу
          получить одну из дорогих популярных стим игр! Средняя стоимость игр в
          Premium Комбо Паке составляет 300 рублей. Заявленная цена на пак не
          учитывает скидки из промо-кодов.
        </div>
        <a class="lucky__link" href="/">Испытать удачу за 59р</a>
      </li>
      <li>
        <img :src="IconPremium" />
        <div class="lucky__item-title">PREMIUM - 125 РУБЛЕЙ</div>
        <div class="lucky__item-text">
          Наш премиальный рандом. За 125 рублей вы получите игру c большим
          шансом от бестселлера прошлых лет, до популярных игр с меньшим шансом
          вроде CS:GO, PUBG, RUST и другие в ценовом диапазоне 250р-800р. Здесь
          вы вы точно получите интересную для себя игру и даже попытаете удачу
          получить одну из дорогих популярных стим игр! Средняя стоимость игр в
          Premium Комбо Паке составляет 300 рублей. Заявленная цена на пак не
          учитывает скидки из промо-кодов.
        </div>
        <a class="lucky__link" href="/">Испытать удачу за 125р</a>
      </li>
      <li>
        <img :src="IconVip" />
        <div class="lucky__item-title">VIP - 125 РУБЛЕЙ</div>
        <div class="lucky__item-text">
          Наш премиальный рандом. За 125 рублей вы получите игру c большим
          шансом от бестселлера прошлых лет, до популярных игр с меньшим шансом
          вроде CS:GO, PUBG, RUST и другие в ценовом диапазоне 250р-800р. Здесь
          вы вы точно получите интересную для себя игру и даже попытаете удачу
          получить одну из дорогих популярных стим игр! Средняя стоимость игр в
          Premium Комбо Паке составляет 300 рублей. Заявленная цена на пак не
          учитывает скидки из промо-кодов.
        </div>
        <a class="lucky__link" href="/">Испытать удачу за 125р</a>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      IconVip: require("@/assets/imgs/EM86-ovNunuleoQE3wRPaQEOxbHWykQg.svg"),
      IconPremium: require("@/assets/imgs/kkGMEHjC_JO4vW3bf7nssEos7eg20-2t.svg"),
      IconIndie: require("@/assets/imgs/EoEWqM8Jo8XtBG_3d55wtWhZbX9bJWHY.svg"),
    };
  },
};
</script>
<style lang="scss" scoped>
.lucky {
  width: 90vw;
  margin: 0 auto;
  padding: 22px 0 86px 0;
  & h1 {
    color: #ffffff;
    text-align: center;
  }
  & p {
    color: #ffffff;
    text-align: center;
  }
}
.lucky__text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 630px;
  margin: 0 auto;
}
.lucky__link {
  padding: 11px 22px;
  color: #ffffff;
  text-decoration: none;
  border-radius: 8px;
  background-color: rgba(50, 50, 54, 0.9);
  transition: 0.2s;
  font-size: 14px;
  &:hover {
    background-color: hsla(0deg, 0%, 100%, 0.27);
  }
}
.lucky__items {
  list-style: none;
  padding: 18px 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 940px;
  flex-wrap: wrap;
  & li {
    border-radius: 8px;
    background-color: rgba(50, 50, 54, 0.9);
    color: #fff;
    width: 284px;
    box-sizing: border-box;
    padding: 24px 14px;
    text-align: center;
    transition: 0.2s;
    &:hover {
      background-color: rgba(58, 58, 61, 0.9);
    }
  }
}
.lucky__item-title {
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 14px;
}
.lucky__item-text {
  font-size: 10px;
  margin-bottom: 28px;
}
@media (max-width: 1180px) {
  .lucky__text {
    justify-content: center;
    & p {
      margin-right: 12px;
    }
  }
  .lucky__items {
    width: 100%;
    & li {
      width: 246px;
      padding: 17px 7px;
    }
  }
  img {
    width: 108px;
  }
  .lucky__item-title {
    font-size: 16px;
    margin-bottom: 8px;
  }
  .lucky__item-text {
    font-size: 9px;
    margin-bottom: 23px;
  }
}
@media (max-width: 840px) {
  .lucky__text {
    flex-wrap: wrap;
    font-size: 14px;
    width: 100%;
  }
  .lucky__items {
    flex-wrap: wrap;
    justify-content: center;
    & li {
      margin: 23px;
    }
  }
}
@media (max-width: 440px) {
  .lucky__text {
    & p {
      margin: 12px 0;
    }
  }
  .lucky__items {
    & li {
      width: 306px;
      padding: 24px 24px;
      & img {
        width: 176px;
      }
    }
  }
  .lucky__item-title {
    font-size: 18px;
  }
  .lucky__link {
    padding: 15px 29px;
  }
}
@media (max-width: 350px) {
  .lucky__items {
    & li {
      padding: 24px 0px;
    }
  }
}
</style>