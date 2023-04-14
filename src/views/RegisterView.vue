<template>
<button class="backArrow" @click="backHome">
  <img class="backFram" :src="require('@/assets/back_Arrow-01.svg')" alt="Frame"/>
</button>
<br/>
<h1 class="welcome">Welcome :)</h1>
<p class="to-keep-connected">To keep connected with us please register with your personal <br/>information by email address and password</p>

 <div class="email-address">
   <img class="frame" :src="require('@/assets/mail icon.svg')" alt="Frame"/>
   <p><input class="email-address-1" type="text" placeholder="Email Address" v-model="email" /></p>
 </div>
 <br/>
 <div class="email-address">
   <img class="frame" :src="require('@/assets/lock icon.svg')" alt="Frame"/>
   <p><input class="password-1" type="password" placeholder="Password" v-model="password" /></p>
 </div>
 <br/>
 <div class="email-address">
   <img class="frame" :src="require('@/assets/lock icon.svg')" alt="Frame"/>
   <p><input class="password-2" type="password" placeholder="Confirm Password" v-model="password_1" /></p>
 </div>

<p><button class="submit-button-3" @click="register">Submit</button></p>
<br/>
<div class="extra">
<p margin-bottom="0 px" style="margin-bottom: 0px;">You can also join with:</p>
<p margin-top="0 px" style="margin-top: 0px;"><button class="extra-button" @click="signInWithGoogle">
  <img class="frame-1" :src="require('@/assets/Google-Icon-PNG_rwscww.png')" alt="Frame"/>
</button>
<button class="extra-button">
  <img class="frame-2" :src="require('@/assets/Facebook-Cricle-Icon_wfkxd4.png')" alt="Frame"/>
</button>
<button class="extra-button">
  <img class="frame-3" :src="require('@/assets/vecteezy_twitter-logo-png-twitter-icon-transparent-free-png_18930528_921.png')" alt="Frame"/>
</button></p>
</div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from"firebase/auth";
import { useRouter } from 'vue-router' //import router
const email = ref("");
const password = ref("");
const password_1 = ref("");
const router = useRouter() // get a reference to our vue router
const auth = getAuth(); // assign the result of getAuth() to a variable

const register = () => {
   if (password.value==password_1.value){
   createUserWithEmailAndPassword(getAuth(), email.value, password.value)
   // eslint-disable-next-line
   .then(() => {
      console.log("Successfully register!");
     // eslint-disable-next-line
      console.log(auth.currentUser)
      router.push('/feed') // redirect to the feed
   })
   .catch((error) => {
      console.log(error.code);
      alert(error.message);
   });
 }else {
   alert("Password in both fields are not same");
 }
};
const signInWithGoogle = () => {
   const provider = new GoogleAuthProvider();
   signInWithPopup(getAuth(), provider)
   .then((result) => {
     console.log(result.user);
     router.push("/feed");
   })
   .catch((error) => {
      console.log(error.code);
      alert(error.message);
   });
};
const backHome = () => {
  // Programmatic navigation using Vue Router
  router.push({ path: '/' });
}
</script>

<style>
.extra-button {
   border: none; /* removes border */
   outline: none; /* removes outline */
   background-color: #ffffff;
   border-radius: 30px;
   line-height: normal;
   
   height: 60px;
   width: 60px;
   transition: background-color 0.3s ease;
}
.extra-button:hover {
  background-color: #d0d0d0;
}

.extra {
  position: relative;
   left: 50%;
   transform: translate(-50%, -50%);
   text-align: left;
   border-radius: 13px;
   height: 100px;
   width: 40%;
   min-width: 400px;
}
.submit-button-3 {
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
   width: 40%;
   min-width: 400px;
   transition: background-color 0.3s ease;
   transition: color 0.3s ease;
   transition: letter-spacing 0.5s ease;
   transition: width 0.3s ease;
}
.submit-button-3:hover {
  background-color: #1f6492;
  color: #ffffff;
  letter-spacing: 2px;
  width: 41%;
}

  .welcome {
   position: relative;
   top: 10%;
   left: 50%;
   transform: translate(-50%, -50%);
   text-align: left;
   color: var(--black);
   font-family: var(--font-family-poppins);
   font-size: 30px;
   font-weight: 400;
   letter-spacing: 0;
   line-height: normal;
   min-height: 40px;
   width: 495px;

  }

  .to-keep-connected {
   position: relative;
   top: 10%;
   left: 50%;
   transform: translate(-50%, -50%);
   text-align: left;
   color: var(--black);
   font-family: var(--font-family-poppins);
   font-size: 16px;
   font-weight: 400;
   letter-spacing: 0;
   line-height: normal;
   width: 490px;
   min-width: 450px;
   min-height: 70px;

   
  }

  .email-address {
   position: relative;
   top: 10%;
   left: 50%;
   transform: translate(-50%, -50%);
   align-items: center;
   
   background-color: #d9d9d9;
   border-radius: 13px;
   display: flex;
   gap: 22px;
   height: 60px;
   width: 40%;
   min-width: 400px;
  }

  .frame {
   padding-left: 10px;
   height: 25px;
  }

  .frame-1 {
    padding-top: 3px;
   height: 35px;
  }

  .frame-2 {
    padding-top: 3px;
   height: 35px;
  }

  .frame-3 {
    padding-top:0px;
   height: 35px;
  }

  .email-address-1 {
   border: none; /* removes border */
    outline: none; /* removes outline */
    background-color: #d9d9d9; /* sets background color */
   align-items: center;
   text-align: left;
   color: #616161;
   font-family: var(--font-family-poppins);
   font-size: var(--font-size-m);
   font-weight: 400;
   letter-spacing: 0;
   line-height: normal;
   margin-bottom: -5px;
   min-height: 10px;
   width: 240px;
  }

  .password-1 {
   border: none; /* removes border */
    outline: none; /* removes outline */
    background-color: #d9d9d9; /* sets background color */
   align-items: center;
   text-align: left;
   color: #616161;
   font-family: var(--font-family-poppins);
   font-size: var(--font-size-m);
   font-weight: 400;
   letter-spacing: 0;
   line-height: normal;
   margin-bottom: -5px;
   min-height: 10px;
   width: 240px;
  }

  .password-2 {
   border: none; /* removes border */
    outline: none; /* removes outline */
    background-color: #d9d9d9; /* sets background color */
   align-items: center;
   text-align: left;
   color: #616161;
   font-family: var(--font-family-poppins);
   font-size: var(--font-size-m);
   font-weight: 400;
   letter-spacing: 0;
   line-height: normal;
   margin-bottom: -5px;
   min-height: 10px;
   width: 240px;
  }
</style>