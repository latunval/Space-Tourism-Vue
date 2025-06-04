<template>
  <div class="body">
    <nav-bar />
    <section class="all">
    <h2><span>03</span> SPACE LAUNCH 101</h2>
    <div v-if="technology.length">
      <section class="techs">
      <div class=" navs">
        <button
          v-for="(place, index) in technology"
          :key="place.name"
          @click="currentIndex = index"
          :class="{ active: currentIndex === index }"
        >
          {{ index + 1 }}
        </button>
      </div>
      <div class="details">
        <h3>{{ currentTechnology.name }}</h3>
        <p>{{ currentTechnology.description }}</p>
      </div>
      <div class="img"><img :src="currentTechnology.images.portrait" :alt="currentTechnology.name"></div>
    </section>
      </div>
      </section>
    </div>
</template>

<script>
// import data from '../assets/data.json'

export default {
  data() {
    return {
      technology: [], // Use the correct key name from your data file
      currentIndex: 0,
    }
  },
  async mounted() {
        const response = await fetch('/data.json')

    const data = await response.json();
    this.technology = data.technology
  },
  computed: {
    currentTechnology() {
      return this.technology[this.currentIndex]
    },
  },
}
</script>

<style scoped>


.body {
    font-family:"Roboto", "Tagesschrift" !important;

    background-image: url(/assets/technology/background-technology-desktop.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.techs{
    color: #fff;

}

.navs{
display: flex;
flex-direction: column;
gap: 20px;
}
.navs button{
     padding: 10px;
    height: 60px;
    width: 60px;
    border:  2px solid #fff;
    color: #353333;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    list-style-type: none;
    background-color: #777676;
}
 .navs button:hover{
    background-color: #fff;
   
}
.navs button.active{
    background-color: #fff;
   
}
.all{
  width: 90%;
  /* border: 2px solid red; */
  margin: 10px 0 10px auto;
}
.techs{
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: spa ce-between; */
    gap: 40px;
}
.details{
    /* border: 2px solid red; */
    width: 48%;
    /* justify-content: center; */
}
.details h1{
    margin: 20px 0;
    font-size: 4rem;
}
.details p {
    width: 28.4rem;
    line-height: 30px;
    opacity: 0.7;
}
.img {
    /* border: 2px solid red; */
    width: 48%;
    display: flex;
    /* justify-content: center; */
}
.img img {
    width: 100%;
    height: 73vh;
} 
.left, .close, .ham{
    display: none !important;
}

@media screen and (max-width:1000px) {
        .body {
    background-image: url(/assets/technology/background-technology-tablet.jpg);
    /* color: red; */
  }
  
  .all {
    flex-direction: column;
    margin: 10px !important;
    padding: 0 !important;
    /* border: 2px solid red; */
    width: 75%;
    align-items: start !important;
  }
  .techs {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* border: 2px solid red; */
}
.details {
    order: 3;
    width: 100%;
    text-align: center;
}
.details p {
    width: 100%;
}
.img{
    order: 1;
    width: 100%;
}
.navs {
    order: 2;
    flex-direction: row;
}


}

@media screen and (max-width:510px) {
    .body {
        background-image: url(/assets/technology/background-technology-mobile.jpg);
        /* color: gold; */
        padding: 0 !important;
    }
 .techs {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* border: 2px solid red; */
    margin: 0 !important;
}
.all{
    /* border: 2px solid red; */
  width: 100%;
}
.details {
    order: 3;
    width: 100%;
    text-align: center;
}
.details p {
    width: 100%;
}
.img{
    order: 1;
    width: 100%;
}
.navs {
    order: 2;
    flex-direction: row;
}
}
</style>
