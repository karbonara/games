<template>
  <section class="contacts">
    <h1>Свяжитесь с нами</h1>
    <div class="contacts__cards">
      <div class="contacts__card">
        <div class="contacts__card-title">Партнерам</div>
        <div class="contacts__card-text">
          Если вы думаете стать партнером и хотите узнать больше про наши
          сервисы и продукты
        </div>
        <a class="contacts__card-mail" href="/">text@mail.com</a>
      </div>
      <div class="contacts__card">
        <div class="contacts__card-title">Партнерам</div>
        <div class="contacts__card-text">
          Если вы думаете стать партнером и хотите узнать больше про наши
          сервисы и продукты
        </div>
        <a class="contacts__card-mail" href="/">text@mail.com</a>
      </div>
      <div class="contacts__card">
        <div class="contacts__card-title">Партнерам</div>
        <div class="contacts__card-text">
          Если вы думаете стать партнером и хотите узнать больше про наши
          сервисы и продукты
        </div>
        <a class="contacts__card-mail" href="/">text@mail.com</a>
      </div>
      <div class="contacts__card">
        <div class="contacts__card-title">Партнерам</div>
        <div class="contacts__card-text">
          Если вы думаете стать партнером и хотите узнать больше про наши
          сервисы и продукты
        </div>
        <a class="contacts__card-mail" href="/">text@mail.com</a>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.contacts {
  width: 90vw;
  margin: 0 auto;
  & h1 {
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    // color: #333;
    color: #fff;
  }
}
.contacts__cards {
  width: 900px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.contacts__card {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  position: relative;
  width: 375px;
  padding: 30px 25px 30px 30px;
  margin-top: 20px;
  background-color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 6px;
  -webkit-box-shadow: 0 2px 10px 0 rgb(0 0 0 / 6%);
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 6%);
  border: 1px solid rgba(62, 64, 77, 0.05);
}
.contacts__card-title {
  margin-bottom: 13px;
  font-size: 18px;
  font-weight: 700;
  color: #333;
  line-height: 1.11;
}
.contacts__card-text {
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.43;
  color: #6a6a7b;
}
.contacts__card-mail {
  font-size: 18px;
  line-height: 1.11;
  color: #005ff9;
  text-decoration: none;
}
@media (max-width: 960px) {
  .contacts__cards {
    width: 100%;
  }
  .contacts__card {
    width: 100%;
    margin-top: 10px;
    padding: 20px 17px 20px 20px;
  }
}
</style>