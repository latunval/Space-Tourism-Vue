<template>
  <div class="body crew">
  <nav-bar />
  <div v-if="crew.length">
    <section class="all">
    <h2><span>02</span> 
      MEET YOUR CREW</h2>
      <section class="crews">
    

    <div class="details">
      <h3>{{ currentMember.role }}</h3>
      <h4>{{ currentMember.name }}</h4>
      <p>{{ currentMember.bio }}</p>
      <div class="tabs crewList d-flex gap-5">
      <button class="cursor"
        v-for="(member, index) in crew"
        :key="member.name"
        @click="currentIndex = index"
        :class="{ active: currentIndex === index }"
      >
        <!-- {{ index + 1 }} -->
      </button>
     </div>
     
    </div>
    <div class="imgs">
 <img :src="currentMember.images.png" :alt="currentMember.name" />
    </div>
    </section>
    </section>
  </div>
  </div>
</template>

<script>
// import NavBar from '@/components/NavBar.vue'
// import data from '../assets/data.json'

export default {
  // components: { NavBar },
  data() {
    return {
      crew: [],
      currentIndex: 0,
    }
  },
  async mounted() {
        const response = await fetch('/src/assets/data.json')
    const data = await response.json()
    this.crew = data.crew
  },
  computed: {
    currentMember() {
      return this.crew[this.currentIndex]
    },
  },
}
</script>
<style scoped>


.body {
    font-family:"Roboto", "Tagesschrift" !important;
   
     background-image: url(/src/assets/destination/background-destination-desktop.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
   
}
.crew{
    color: #fff;
}



.crews {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin: 10px auto;
}
.crews {
    margin: 0;
    justify-content: space-between;
    width: 98%;
}

.imgs{
    width: 40%;
    height: fit-content;
}
.imgs img{
    height: 70vh;
}

 .details h1 {
      font-size: 4rem;
    font-weight: 350;
 }
 .cursor{
    cursor: pointer;
    list-style-type: none;
    height: 20px;
    width: 20px;
    background-color: #555353;
    border-radius: 50%;
    border: 0;
 }
 
 .cursor.active, .cursor:hover {
  /* border-bottom: 2px solid white; */
  /* opacity: 1; */
  background-color: #fff;
}
 .all{
    width: 90%;
    margin: 0 0 0 auto;
 }
.details > p{
 width: 31rem;
 text-align: start;
    line-height: 30px;
    margin: 10px 0 140px 0;
    opacity: 0.6;
}
.crew h3{
    opacity: 0.6;
}


@media screen and (max-width:1000px) {
        .body {
    background-image: url(/src/assets/crew/background-crew-tablet.jpg);
  }
    
 
  .crews {
    flex-direction: column;
    margin: 10px !important;
    padding: 0 !important;
    width: 75%;
    align-items: start !important;
  }
  .all{
    margin: 50px auto;
  }

}

@media screen and (max-width:510px) {
    .body {
        background-image: url(/src/assets/crew/background-crew-mobile.jpg);
        /* color: gold; */
        padding: 0;
    }
      .crews {
    flex-direction: column;
    margin: 10px !important;
    padding: 0 !important;
    width: 96%;
    border: 2px solid red;
    align-items: start !important;
  }
  .details p {
    width: 90%;
  }}
</style>
