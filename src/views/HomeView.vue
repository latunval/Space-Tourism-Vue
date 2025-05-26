<template>
  <div class="body">
    <nav-bar />
    <section class="d-flex ace">
      <section class="space">
        <h4>SO, YOU WANT TO TRAVEL TO</h4>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
          truly out of this world experience!
        </p>
      </section>
      <section class="explore animate__animated animate__fadeInLeft"><li><router-link :to="{ name: 'destination' }">EXPLORE</router-link></li></section>
    </section>
  </div>
</template>

<script>
// import NavBar from '../components/NavBar.vue'
export default {
  // components: {NavBar}
  
    
  
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Red+Hat+Text:ital,wght@0,300..700;1,300..700&family=Roboto:ital,wght@0,100..900;1,100..900&family=Tagesschrift&display=swap'); */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li{
  list-style-type: none;
}
.body {
  font-family: 'Roboto', 'Tagesschrift' !important;

  background-image: url(/src/assets/home/background-home-desktop.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  width: 100%;
  /* padding: 20px; */
  /* border: 2px solid red; */
  /* overflow: hidden; */
}


/* space section  */

.ace {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border: 2px solid red; */
  align-items: center;
  width: 80%;
  margin: 50px auto;
}

.space {
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  gap: 50px;
}
.space h4 {
  word-spacing: 10px;
  color: #d0d6f9;
}
.space h1 {
  font-weight: 300;
  font-size: 8.5rem;
}
.space p {
  color: #d0d6f9;
  width: 25.5rem;
  line-height: 30px;
}
.explore {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #353333;
  font-size: 1.6rem;
  cursor: pointer;
}
.explore:hover {
  box-shadow: 0 0 10px 30px rgba(252, 251, 251, 0.322);
}
.explore a {
  color: #353333 !important;
}
a {
  text-decoration: none !important;
  color: #fff !important;
}

@media screen and (min-width: 502px) and (max-width: 1050px) {
  .body {
    background-image: url(/src/assets/home/background-home-tablet.jpg);
    /* color: red; */
      /* width: %; */
      padding: 0 0 20px;
      height: fit-content;
  }
 .ace {
  display: flex;
  flex-direction: column;
 /* border: 2px solid red; */
  width: 60%;
  /* margin: 20px auto 50px; */
}

.space {
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}.space h4 {
  word-spacing: 10px;
  color: #d0d6f9;
}
.space h1 {
  font-weight: 300;
  font-size: 2.5rem;
}
.space p {
  color: #d0d6f9;
  width: 25.5rem;
  line-height: 30px;
}

}

@media screen and (max-width: 500px) {
  .body {
    background-image: url(/src/assets/home/background-home-mobile.jpg);
    /* color: gold; */
    padding: 10px 5px 30px;
  }
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
  h1 {
    font-size: 5rem !important;
  }
  h4 {
    text-align: center;
  }
  .ace {
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;
    /* border: 2px solid red; */
  }
  p {
    text-align: center;
    margin: 0 auto;
    width: 18rem !important;
    /* border: 2px solid red; */
  }
}
</style>
