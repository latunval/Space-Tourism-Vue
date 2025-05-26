<template>
  <div class="header">
    <div class="logoImg">
      <img class="logo" src="../assets/shared/logo.svg" alt="logo" />
    </div>
    <nav class="nav d-flex">
      <li class="line"></li>
      <!-- Hamburger Icon -->
      <img
        class="ham" :class="{hams: !isMenuOpen}"
        @click="toggleMenu"
        v-show="!isMenuOpen"
        src="../assets/shared/icon-hamburger.svg"
        alt="hamburger icon"
      />

      <!-- Sliding Menu -->
      <div class=" side-menu" :class="{show: isMenuOpen}">
        <img class="close" @click="toggleMenu" src="../assets/shared/icon-close.svg" alt="close icon" />

        <ul class="nav-bar">
          <li><router-link :to="{ name: 'home' }" exact-active-class="active">00 HOME</router-link></li>
          <li><router-link :to="{ name: 'destination' }" exact-active-class="active">01 DESTINATION</router-link></li>
          <li><router-link :to="{ name: 'crew' }" exact-active-class="active">02 CREW</router-link></li>
          <li><router-link :to="{ name: 'technology' }" exact-active-class="active">03 TECHNOLOGY</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu(){
      this.isMenuOpen = !this.isMenuOpen;
    }
}
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.logo {
  display: inline-block;
}
.header {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 130px auto !important;
  /* border: 2px solid red; */
}
.line {
  height: 2px;
  list-style-type: none;
  /* width: 50%; */
  width: 600px !important;
  /* background-color: red; */
  background-color: #353333;
  transform: translateX(80px);
}
.nav {
  width: 95%;
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  align-items: center;
}
.nav li {
  display: flex;
  list-style-type: none;
}
.nav-bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  align-items: center !important;
  background-color: #36353581;
  margin: 0 !important;
  padding: 20px 30px 0 !important;
  width: 100% !important;
  word-spacing: 15px;
}
.nav-bar a {
  /* display: flex; */
  text-decoration: none;
  color: #fff;
  /* margin: 20px auto; */
  padding-bottom: 20px;
}
.active {
  /* height: 2px; */
  border-bottom: 3px solid #fff;
}
.left,
.close,
.ham {
  display: none !important;
}

@media screen and (min-width: 502px) and (max-width: 900px) {
  .header {
    /* border: 2px solid red; */
    padding: 0 !important;
    width: 100% !important;
    margin: 10px 0 0 0 !important;
    /* justify-content: center !important; */
  }
  .nav-bar {
    /* border: 2px solid gold; */
    /* margin: 0  auto 0 13px !important; */
    gap: 50px;
    width: 100%;
    word-spacing: 10px;
  }
  .nav {
    width: 90%;
    display: flex;
    justify-content: end;
    /* border: 2px solid red; */
  }

  .line {
    display: none !important;
  }
}
@media screen and (min-width: 900px) and (max-width: 1350px) {
  .header {
    /* border: 2px solid red; */
    padding: 0 !important;
    width: 100% !important;
    margin: 10px 0 0 0 !important;
    /* justify-content: center !important; */
  }
  .nav-bar {
    /* border: 2px solid gold; */
    margin: 0 auto !important;
    gap: 50px;
    width: 100%;
    word-spacing: 10px;
    /* align-self: end; */
  }
  .nav {
    width: 90%;
    display: flex;
    /* flex-direction: column; */
    justify-content: end;
    /* border: 2px solid red; */
  }

  .line {
    display: none !important;
  }
}
@media screen and (max-width: 500px) {
  .header {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: start;
    margin: 10px 0 !important;
    /* border: 2px solid red; */
  }
  .close,
  .hams {
    display: block !important;
  }
  /* Hide menu off-screen */
  .side-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 200px;
    background-color: #36353581;
    /* height: 100vh; */
    /* background-color: #000; */
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    /* padding: 20px; */
    z-index: 1000;
  }

  .side-menu.show {
    transform: translateX(0);
  }

  /* Hide close button by default */
  .close {
    display: none;
    float: right;
  }

  /* Position hamburger icon */
  .ham {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1100;
    cursor: pointer;
  }

  /* Navigation items */
  .nav-bar {
    list-style: none;
    /* padding-left: 0 !important; */
    /* padding: 0 !important; */
    margin-top: 40px;
    display: flex !important;
    /* justify-content: center; */
    align-items: flex-start !important;
    /* justify-items: start !important; */
    flex-direction: column;
    /* justify-content: start !important;    */
    gap: 10px;
    background-color: #36353500;
    /* text-align: start !important; */
    width: 100% !important;
    /* border: 2px solid red; */
    padding: 0 !important;
  }
  .nav {
    border: 0;
  }

  .nav-bar a {
    /* border: 2px solid red; */
    color: white;
    display: flex !important;
    flex-direction: row !important;
    border-bottom: 0;
    overflow: hidden;
    margin: 0 !important;
    text-decoration: none;
    width: 100% !important;
    /* margin: 0 0 0 -40px !important; */
    padding-right: 110px;
    word-spacing: 5px;
  }
  .active {
    /* height: 2px; */
    border-right: 3px solid #fff;
  }

  .line {
    display: none !important;
  }
}
</style>
