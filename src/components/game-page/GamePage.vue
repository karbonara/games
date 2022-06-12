<template>
  <section class="game__item">
    <div class="game__item-inner">
      <p>Pubg (PlayerUnknown's Battlegrounds)</p>
      <a href="/">Купить </a>
    </div>
    <div class="game__item-container">
      <div class="game__item-container-left">
        <div class="game__item-container-left-info">
          <div class="game__item-container-box">
            <h2>Об игре</h2>
            <p>
              Warface — динамичный экшен в жанре MMOFPS с миллионами поклонников
              по всему миру. В игре вас ждут отличная графика, увлекательные
              PvP-бои и PvE-миссии, где вы можете испытать себя, играя 5
              различными классами, и у каждого из них своя тактика ведения боя.
              В PvE вам предстоит выполнять миссии в самых отдаленных уголках
              планеты, а в PvP играть в тактических режимах и динамичных боях на
              выживание.
            </p>
          </div>
        </div>
        <div class="game__item-container-left-info">
          <div class="game__item-container-box">
            <img
              class="game__item-previev"
              src="https://store.my.games/pre_310x186_resize/hotbox/showcase/game/picture/76178575-669c-4d8a-8d65-374a58d96feb.jpeg?quality=85&format=webp"
              alt=""
            />
            <p>
              Warface — динамичный экшен в жанре MMOFPS с миллионами поклонников
              по всему миру. В игре вас ждут отличная графика, увлекательные
              PvP-бои и PvE-миссии, где вы можете испытать себя, играя 5
              различными классами, и у каждого из них своя тактика ведения боя.
              В PvE вам предстоит выполнять миссии в самых отдаленных уголках
              планеты, а в PvP играть в тактических режимах и динамичных боях на
              выживание.
            </p>
          </div>
        </div>
        <div class="slider__container">
          <h2>Вам может понравиться</h2>
          <!-- <SliderInPage /> -->
        </div>
      </div>
      <div class="game__item-container-right">
        <div class="game__item-container-right-info">
          <img
            src="https://store.my.games/pre_310x186_resize/hotbox/showcase/gamelocale/picture/c4b0062f-8742-45c2-8320-73afec862399.jpg?quality=85&format=webp"
            alt="game"
          />
          <p>
            Вам предстоит вести сражения в различных уголках земного шара,
            начиная с городов и заканчивая самыми опасными местами на планете.
            Инновационный дизайн проекта сочетает простое управление и
            уникальный игровой процесс, позволяющий с головой окунуться в
            суровый мир будущего.
          </p>
        </div>
        <div class="game__item-container-right-info">
          <div class="game__item-container-box">
            <h2>Информация об игре</h2>
            <ul class="game__item-lists-info">
              <li>
                <p>Жанр</p>
                <p>Экшен, Шутер</p>
              </li>
              <li>
                <p>Издатель</p>
                <p>Экшен, Шутер</p>
              </li>
              <li>
                <p>Техническая поддержка</p>
                <p>Экшен, Шутер</p>
              </li>
              <li>
                <p>Дата выхода</p>
                <p>Экшен, Шутер</p>
              </li>
              <li>
                <p>Размер дистрибутива</p>
                <p>Экшен, Шутер</p>
              </li>
              <li>
                <p>Теги</p>
                <p>Экшен, Шутер</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="game__item-container-right-info">
          <div class="game__item-container-box">
            <h2>Атрибуты</h2>
            <ul class="game__item-lists-info">
              <li>
                <p>Жанр</p>
                <p>Возрастное ограничение</p>
              </li>
              <li>
                <p>Издатель</p>
                <p>Клиентская</p>
              </li>
              <li>
                <p>Техническая</p>
                <p>Поддерживает запись видео</p>
              </li>
              <li>
                <p>Дата</p>
                <p>Поддерживает снятие скриншотов</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="game__item-container-right-info">
          <div class="game__item-container-box">
            <h2>Системные требования</h2>
            <h4>Минимальные</h4>
            <ul class="game__item-list-system">
              <li>ОС: Windows XP</li>
              <li>Процессор: Intel Core 2 Duo</li>
              <li>Память: 2 ГБ</li>
              <li>Место на диске: 500 М</li>
              <li>Видеокарта: с 128 MB памяти</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SliderInPage from "@/components/slider/SliderInPage";

export default {
  components: {
    SliderInPage,
  },
  data() {
    return {
      ImgItem: require("@/assets/imgs/game-page/Battlegrounds.jpg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.game__item {
  width: 90vw;
  margin: 0 auto;
  padding: 38px 0;
}
.game__item-inner {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 3px 32px;
  background-color: #3d3d3d;
  border-radius: 8px;
  & p {
    font-size: 23px;
    color: #ffffff;
  }
  & a {
    font-size: 17px;
    font-weight: 500;
    background-color: #ffca4d;
    text-decoration: none;
    color: #2f2f35;
    border-radius: 8px;
    padding: 11px 52px;
    transition: 0.2s;
    position: relative;
    &:hover {
      opacity: 0.8;
    }
  }
}
.game__item-container {
  display: flex;
  justify-content: space-between;
  padding: 84px 0 0 0;
}
.game__item-container-left {
  width: 72%;
}
.game__item-container-right {
  width: 310px;
}
.game__item-container-box {
  padding: 12px;
}
.game__item-container-left-info {
  width: 100%;
  color: #bcbcbc;
  background-color: #2f2f35;
  border-radius: 6px;
  margin-bottom: 23px;
}
.game__item-container-right-info {
  width: 100%;
  color: #bcbcbc;
  background-color: #2f2f35;
  border-radius: 6px;
  margin-bottom: 23px;
  & h2 {
    font-size: 18px;
    line-height: 1.33;
    font-weight: 500;
  }
  & p {
    padding: 14px;
    font-size: 12px;
    margin: 0;
  }
  & img {
    width: 310px;
  }
}
.game__item-lists-info {
  padding: 0;
  list-style: none;
  margin: 0;
  & li {
    display: flex;
  }
  & p {
    margin: 0 12px 0 0;
    font-size: 13px;
    padding: 4px 0;
  }
  & p:first-child {
    width: 100px;
  }
}
.game__item-previev {
  width: 100%;
}
.game__item-list-system {
  padding: 0px 0px 0px 17px;
}
.slider__container {
  padding: 34px 0;
  & h2 {
    color: #f5f5f7;
    font-size: 18px;
  }
}
@media (max-width: 1204px) {
  .game__item-container-left {
    width: 640px;
  }
}
@media (max-width: 1070px) {
  .game__item-container-left {
    width: 60%;
  }
}
@media (max-width: 855px) {
  .game__item-container {
    flex-wrap: wrap;
  }
  .game__item-container-left {
    width: 100%;
  }
  .game__item-container-right {
    width: 100%;
  }
  .game__item-container-right-info {
    & img {
      width: 100%;
    }
  }
  .game__item-lists-info {
    & p:first-child {
      width: 180px;
    }
  }
}
@media (max-width: 524px) {
  .game__item-lists-info {
    & p:first-child {
      width: 110px;
    }
  }
  .game__item-inner {
    padding: 3px 32px;
    & p {
      font-size: 13px;
    }
    & a {
      font-size: 14px;
      padding: 9px 36px;
    }
  }
}
@media (max-width: 375px) {
  .game__item-inner {
    padding: 3px 12px;
    & p {
      font-size: 13px;
    }
    & a {
      font-size: 14px;
      padding: 9px 28px;
    }
  }
}
@media (max-width: 322px) {
  .game__item-inner {
    padding: 3px 8px;
    & p {
      font-size: 12px;
    }
    & a {
      font-size: 12px;
      padding: 9px 22px;
    }
  }
}
</style>