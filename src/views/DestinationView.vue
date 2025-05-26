<template>
  <div class="body">
    <nav-bar />
    <section class="all">
      <h2><span class="num">01</span> Pick Your Destination</h2>
    <div v-if="destination.length > 0">
      <section class="moon"> 
        <div class="moonDisplay">  
<section class="img">
     <img :src="currentPlanet.images.png" :alt="currentPlanet.name" />
</section>
<div class="moonDetails">
      <div class=" moonNav">
        <ul>
        <li class="tabs"
          v-for="(planet, index) in destination"
          :key="planet.name"
          @click="currentIndex = index"
          :class="{ active: currentIndex === index }"
        >
          {{ planet.name }}
        </li>
        </ul>
      </div>
      
        <h3>{{ currentPlanet.name }}</h3>
        <p>{{ currentPlanet.description }}</p>
        <section class="kilo">
          <article>
            <p class="avg">AVG. DISTANCE</p>
            <h3 class="num">{{currentPlanet.distance}}</h3>
          </article>
          <article>
            <p class="avg">EST. TRAVEL TIME</p>
            <h3 class="days">{{currentPlanet.travel}}</h3>
          </article>
        </section>
      </div>
      </div>
      </section>
    </div>
    </section>
  </div>
</template>

<script>
// import NavBar from '@/components/NavBar.vue'
// import data from '../assets/data.json'

export default {
  // components: { NavBar },
  data() {
    return {
      destination: [],
      currentIndex: 0,
    }
  },
  async mounted() {
    const response = await fetch('/public/data.json')
    const data = await response.json()
    this.destination = data.destinations
  },
  computed: {
    currentPlanet() {
      return this.destination[this.currentIndex]
    },
  },
}
</script>
<style scoped>
.body {
  font-family: 'Roboto', 'Tagesschrift' !important;
  color: #fff;
  background-image: url(/src/assets/destination/background-destination-desktop.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* space section  */

.moon > h2 {
  margin: 0 140px 130px;
}
.moonDisplay {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  /* border: 2px solid red; */
  margin: 10px auto;
  /* height: fit-content; */
}

.img {
  text-align: center;
  width: 50%;
  height: fit-content;
}

.moonDetails {
  width: 50%;
  padding: 20px;
  /* border: 2px solid red; */
}
.moonDetails h1 {
  font-size: 5rem;
  font-weight: 350;
  margin: 20px 0;
}

.tabs.active, .tabs:hover {
  border-bottom: 3px solid  #fff;
}
.all {
  width: 90%;
  margin: 0 0 0 auto;
  /* padding: 0 30px 0; */
}

.moonDetails > p {
  width: 25rem;
  line-height: 30px;
  /* margin: 10px 0 30px; */
  padding: 0 0 30px;
  border-bottom: 2px solid #ccc;
}
.kilo {
  display: flex;
  flex-direction: row;
  /* border: 2px solid red; */
  width: 70%;
  gap: 50px;
  /* justify-content: center; */
}
article {
  margin: 40px 0 !important;
  /* border: 2px solid red; */
  width: 50%;
}
.moonNav ul {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.moonNav ul li {
  /* color: #fff; */
  padding: 10px 0;
  cursor: pointer;
  list-style-type: none;
 color: #fff !important;
}

@media screen and (max-width: 1050px) {
  .body {
    background-image: url(/src/assets/destination/background-destination-tablet.jpg);
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
  .line {
    display: none !important;
  }

  .moonDisplay {
    display: flex;
    flex-direction: column;
    width: 100% !important;
    margin: 20px 0 !important;
    padding: 0 !important;
    /* border: 2px solid red; */
  }
  .moonDetails {
    text-align: center;
    width: 100%;
    /* padding: 20px; */
    /* border: 2px solid red; */
  }
  .moonDetails p,
  .kilo {
    margin: 0 auto;
  }
  .img {
    margin: 0;
    width: 80%;
    /* border: 2px solid gold; */
  }
  .img img {
    width: 100%;
  }
}

@media screen and (max-width: 510px) {
  .body {
    background-image: url(/src/assets/destination/background-destination-mobile.jpg);
    /* color: gold; */
    padding: 0;
  }

  .line {
    display: none !important;
  }

  .all {
    flex-direction: column;
    margin: 0 !important;
    padding: 0 !important;
    /* border: 2px solid red; */
    width: 75%;
    align-items: start !important;
  }
  .line {
    display: none !important;
  }
  /* .moon{
border: 2px solid gold;
padding: 0 !important;
width: 70%;
  } */

  .moonDisplay {
    display: flex;
    flex-direction: column;
    width: 100% !important;
    margin: 20px 0 !important;
    padding: 0 !important;
    /* border: 2px solid red; */
  }
  .moonDetails {
    text-align: center;
    width: 100%;
    /* padding: 20px; */
    /* border: 2px solid red; */
  }
  .moonDetails p {
    width: 100%;
    text-align: center;
    /* border: 2px solid red !important; */
  }
  .kilo {
    flex-direction: column;
    gap: 20px;
    /* border: 2px solid red; */
  }
  article {
    width: 100%;
    margin: 0 !important;
  }
  .moonDetails p,
  .kilo {
    margin: 20px auto;
  }
  .img {
    margin: 0;
    width: 80%;
    /* border: 2px solid gold; */
  }
  .img img {
    width: 100%;
  }
}
</style>
