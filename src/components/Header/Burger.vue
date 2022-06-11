<template>
  <div class="burger">
    <input id="menu__toggle" type="checkbox" />
    <label @click="modal" class="menu__btn" for="menu__toggle">
      <span></span>
    </label>
  </div>
  <transition name="slide-fade">
    <div v-if="show" class="burger__wrapper">
      <div class="burger__wrapper-buttons">
        <div class="burger__main-buttons">
          <ButtonMobile>Регистрация</ButtonMobile>
          <ButtonMobile
            :style="{
              backgroundColor: ['#454549'],
              color: ['#ffffff'],
            }"
            >Вход</ButtonMobile
          >
        </div>
      </div>
      <div class="burger__content">
        <ul class="burger__content-info-no-border">
          <li>
            <RouterLink to="/games">Игры</RouterLink>
          </li>
          <li>
            <RouterLink to="/games">Игры</RouterLink>
          </li>
          <li>
            <RouterLink to="/games">Игры</RouterLink>
          </li>
        </ul>
        <ul class="burger__content-info-border">
          <li>
            <RouterLink to="/contacts">Контакты</RouterLink>
          </li>
          <li>
            <RouterLink to="/agreement">Соглашение</RouterLink>
          </li>
          <li>
            <RouterLink to="/privacy">Политика конфиденциальности</RouterLink>
          </li>
        </ul>
        <div class="burger__content-social">
          <svg
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
          >
            <path
              d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M21.361,18.967 l-1.868,0.026c0,0-0.403,0.079-0.93-0.285c-0.699-0.48-1.358-1.729-1.872-1.567c-0.521,0.166-0.505,1.29-0.505,1.29 s0.004,0.198-0.115,0.327c-0.129,0.139-0.382,0.125-0.382,0.125h-0.837c0,0-1.846,0.153-3.473-1.543 c-1.772-1.849-3.338-5.498-3.338-5.498s-0.092-0.23,0.006-0.348c0.111-0.13,0.41-0.134,0.41-0.134l2-0.01 c0,0,0.188,0.033,0.324,0.133c0.111,0.082,0.174,0.236,0.174,0.236s0.323,0.819,0.752,1.561c0.836,1.446,1.224,1.763,1.508,1.608 c0.414-0.226,0.29-2.044,0.29-2.044s0.008-0.66-0.208-0.954c-0.168-0.229-0.484-0.297-0.622-0.314 c-0.113-0.015,0.071-0.277,0.311-0.395c0.36-0.176,0.996-0.186,1.747-0.179c0.585,0.006,0.754,0.042,0.982,0.098 c0.69,0.167,0.456,0.811,0.456,2.356c0,0.495-0.089,1.191,0.267,1.42c0.154,0.099,0.529,0.015,1.464-1.579 c0.445-0.756,0.778-1.644,0.778-1.644s0.073-0.158,0.186-0.226c0.116-0.07,0.272-0.048,0.272-0.048l2.105-0.013 c0,0,0.632-0.076,0.735,0.211c0.108,0.3-0.236,1.001-1.096,2.148c-1.412,1.884-1.569,1.709-0.396,2.799 c1.12,1.041,1.351,1.547,1.39,1.611C22.339,18.906,21.361,18.967,21.361,18.967z"
            />
          </svg>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ButtonMobile from "@/components/header/buttons/ButtonMobile";

export default {
  components: {
    ButtonMobile,
  },
  data: function () {
    return {
      show: false,
    };
  },
  methods: {
    modal: function () {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss" scoped>
.burger {
  display: none;
  width: 52px;
}
.burger__wrapper {
  display: none;
  width: 100%;
}
/* скрываем чекбокс */
#menu__toggle {
  opacity: 0;
}
/* стилизуем кнопку */
.menu__btn {
  display: flex; /* используем flex для центрирования содержимого */
  align-items: center; /* центрируем содержимое кнопки */
  position: absolute;
  top: 20px;
  left: 20px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 1;
}
/* добавляем "гамбургер" */
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #616161;
}
.menu__btn > span::before {
  content: "";
  top: -8px;
}
.menu__btn > span::after {
  content: "";
  top: 8px;
}
#menu__toggle:checked ~ .menu__btn > span {
  transform: rotate(45deg);
}
#menu__toggle:checked ~ .menu__btn > span::before {
  top: 0;
  transform: rotate(0);
}
#menu__toggle:checked ~ .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
  visibility: visible;
  left: 0;
}
@media (max-width: 690px) {
  .slide-fade-enter-active {
    transition: all 0.2s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.2s;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(-20px);
    opacity: 0;
  }

  .burger {
    display: block;
  }
  .burger__wrapper {
    display: block;
    position: absolute;
    top: 62px;
    left: 0;

    z-index: 999;
    & ul {
      margin: 0;
      list-style: none;
      & li {
        width: 100%;
        padding: 8px 8px 8px 46px;
        margin-bottom: 8px;
        box-sizing: border-box;
      }
      & a {
        display: flex;
        padding: 8px;
        font-size: 18px;
        color: #ffffff;
        text-decoration: none;
      }
    }
  }
  .burger__content-info-no-border {
    padding: 0;
  }
  .burger__content {
    margin-top: -6px;
    border-radius: 10px 10px 0 0;
    background: linear-gradient(to top, #1e2125 0%, rgba(30, 33, 37, 0) 100%),
      #000;
  }
  .burger__content-info-border {
    padding: 24px 0 26px 0;
    &::before {
      content: "";
      display: block;
      margin: 11px auto;
      width: calc(100% - 40px);
      border-top: 1px solid #454549;
    }
    &::after {
      content: "";
      display: block;
      margin: 11px auto;
      width: calc(100% - 40px);
      border-bottom: 1px solid #454549;
    }
  }
  .burger__wrapper-buttons {
    padding: 0px 0 18px 0;
    background: #242429;
  }
  .burger__main-buttons {
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
}
.burger__content-social {
  padding: 18px 0;
  & svg {
    text-align: center;
    display: flex;
    margin: 0 auto;
  }
}
@media (max-width: 450px) {
  .burger__main-buttons {
    width: 90%;
  }
}
@media (max-width: 356px) {
  .burger__main-buttons {
    width: 100%;
    padding: 0 19px;
    box-sizing: border-box;
  }
}
</style>