<template>           
     <p><button class="submit-button" @click="clickMethod">{{ login }}</button></p><br/>
     <p><button class="submit-button-1" @click="clickMethod1">{{ signup }}</button></p><br/>
                        <!-- <div @click="clickMethod" class="overlap-group1" >
                            <div class="login poppins-normal-white-20px" >{{ login }}</div>
                        </div>
                        <div @click="clickMethod1" class="overlap-group2">
                            <div class="sign-up poppins-normal-white-20px">{{ signup }}</div> -->
                        
                
      <p><img class="pro-hunt-01-1" :src="require('@/assets/pro hunt-01.png')" alt="pro hunt-01 1" /></p>  
      <div>                   
        <p class="effortless-managemen poppins-medium-white-16px">
            <span class="poppins-medium-black-16px" >Effortless Management of Your Project Library:<br /></span>
            <span class="poppins-bold-black-30px">Simplify Your Workflow <br /> and</span>
            <span class="poppins-bold-curious-blue-30px">Enhance</span>
            <span class="poppins-bold-black-30px">Collaboration</span>
        </p>
      </div> 
      <div class="our-website-also-off">
        <p class="poppins-medium-black-16px" v-html="ourWebsiteAlsoOff"></p>
         <p><button class="submit-button-2" @click="clickMethod2">Explore Projects</button></p><br/>
        </div>
        <img class="homescreen-pic-01-1" :src="require('@/assets/homescreen-pic-01.png')" alt="homescreen-pic-011" />
      
</template>

<script>
 export default {
    name: "MainScreen",
    props: [
        "place1",
        "aboutUs",
        "place2",
        "login",
        "signup",
        "spanText3",
        "spanText4",
        "spanText5",
        "ourWebsiteAlsoOff",
        "homescreenPic001",
    ],

    methods: {
        clickMethod() {
      this.$router.push({ path: '/sign-in' });
    },
    
    clickMethod1() {
      this.$router.push({ path: '/register' });
    },
    clickMethod2() {
      this.$router.push({ path: '' });
    },
  },
 };
</script>

<style>

.submit-button{
   border: none; /* removes border */
    outline: none; /* removes outline */
   position: absolute;
   top: 30px;
   left: 10px;
   background-color: #2787c9;
   border-radius: 13px;
   text-align: center;
   color: #eaeaea;
   font-family: var(--font-family-poppins);
   font-size: 18px;
   font-weight: 100;
   letter-spacing: 0;
   line-height: normal;
   min-height: 40px;
   height: 40px;
   width: 100px;
   transition: background-color 0.5s ease;
   transition: color 0.3s ease;
   transition: letter-spacing 0.4s ease;
   transition: width 0.2s ease;
}
.submit-button:hover {
  background-color: #1f6492;
  color: #ffffff;
  letter-spacing: 1px;
  width: 110px;
}

.submit-button-1{
   border: none; /* removes border */
    outline: none; /* removes outline */
   position: absolute;
   top: 80px;
   left: 10px;
   background-color: #2787c9;
   border-radius: 13px;
   text-align: center;
   color: #eaeaea;
   font-family: var(--font-family-poppins);
   font-size: 18px;
   font-weight: 100;
   letter-spacing: 0;
   line-height: normal;
   min-height: 40px;
   height: 40px;
   width: 100px;
   transition: background-color 0.5s ease;
   transition: color 0.3s ease;
   transition: letter-spacing 0.4s ease;
   transition: width 0.2s ease;
}
.submit-button-1:hover {
  background-color: #1f6492;
  color: #ffffff;
  letter-spacing: 1px;
  width: 110px;
}

.submit-button-2{
   border: none; /* removes border */
    outline: none; /* removes outline */
   position: relative;
   margin-bottom: 10px;
   background-color: #2787c9;
   border-radius: 15px;
   text-align: center;
   color: #eaeaea;
   font-family: var(--font-family-poppins);
   font-size: 20px;
   font-weight: 100;
   letter-spacing: 0;
   line-height: normal;
   min-height: 40px;
   height: 50px;
   width: 200px;
   transition: background-color 0.5s ease;
   transition: color 0.3s ease;
   transition: letter-spacing 0.4s ease;
   transition: width 0.2s ease;
}
.submit-button-2:hover {
  background-color: #1f6492;
  color: #ffffff;
  letter-spacing: 1px;
  width: 210px;
}


   .place {
    letter-spacing: 0;
    line-height: normal;
    margin-bottom: 2px;
    min-height: 30px;
    min-width: 60px;
   }

   .about-us {
    letter-spacing: o;
    line-height: normal;
    margin-bottom: 2px;
    margin-left: 281px;
    min-height: 30px;
    min-width: 89px;
   }

   .place-1 {
    letter-spacing: 0px;
    line-height: normal;
    margin-bottom: 2px;
    margin-left: 40px;
    min-height: 30px;
    min-width: 82px;
   }

   .login {
    letter-spacing: 0;
    padding: 0px 10px;
    position: relative;
   }

   .sign-up {
    letter-spacing: 0;
    padding: 0px 10px;
    position: relative;
   }
   
   .effortless-managemen {
    text-align: left;
    left: 5%;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 200px;
   }

   .our-website-also-off {
    text-align: left;
    left: 5%;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 320px;
   }

   .homescreen-pic-01-1 {
    top: 0px;
    height: 850px;
    left: 650px;
    object-fit: cover;
    position: absolute;
    z-index: -1;
   }

   .overlap-group {
    position: absolute;
    bottom: 50px;
    left: 15px;
    background-color: var(--curious-blue);
    border-radius: 23px;
    width:150px;
    height: 60px;
    max-width: 200px;
   }

   .explore-projects {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    letter-spacing: 0;
    line-height: normal;
    min-height: 26px;
    width: 157px;
   }

   .pro-hunt-01-1 {
    position: absolute;
    top: 40px;
    transform: translate(-50%, -30%);
    height: 200px;
    width: 200px;
   }
</style>