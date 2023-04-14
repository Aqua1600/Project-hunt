<template>
<button class="backArrow" @click="backHome">
  <img class="backFram" :src="require('@/assets/back_Arrow-01.svg')" alt="Frame"/>
</button>
<br/>
<h1 class="welcome-back">Welcome Back :)</h1>
<p class="to-keep-connected-1">To keep connected with us please login with your personal <br/>information by email address and password</p>
<div class="email-address-2">
   <img class="frame-4" :src="require('@/assets/mail icon.svg')" alt="Frame"/>
   <p><input class="email-address-3" type="text" placeholder="Email Address" v-model="email" /></p>
 </div>
 <br/>
 <div class="email-address-2">
   <img class="frame-4" :src="require('@/assets/lock icon.svg')" alt="Frame"/>
   <p><input class="password-3" type="password" placeholder="Password" v-model="password" /></p>
 </div>
<p v-if="errMsg">{{ errMsg }}</p>
<p><button class="submit-button-4" @click="register">Submit</button></p>
<br/>
<div class="extra-1">
<p margin-bottom="0 px" style="margin-bottom: 0px;">You can also join with:</p>
<p margin-top="0 px" style="margin-top: 0px;"><button class="extra-button-1" @click="signInWithGoogle">
  <img class="frame-5" :src="require('@/assets/Google-Icon-PNG_rwscww.png')" alt="Frame"/>
</button>
<button class="extra-button-1">
  <img class="frame-6" :src="require('@/assets/Facebook-Cricle-Icon_wfkxd4.png')" alt="Frame"/>
</button>
<button class="extra-button-1">
  <img class="frame-7" :src="require('@/assets/vecteezy_twitter-logo-png-twitter-icon-transparent-free-png_18930528_921.png')" alt="Frame"/>
</button></p>

</div>
</template>


<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const router = useRouter();
const email = ref("");
const password = ref("");
const errMsg = ref();
const auth = getAuth(); // assign the result of getAuth() to a variable
const register = () => {
  signInWithEmailAndPassword(auth, email.value, password.value) // use the auth variable here
    .then(() => {
      console.log("Successfully signed in!");
      console.log(auth.currentUser); // use the auth object here
      router.push('/feed');
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
      alert(error.message);
    });
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
.backArrow {
  border: none; /* removes border */
   outline: none; /* removes outline */
   position: absolute;
   top: 10px;
   left: 0;
   line-height: normal;  
   height: 60px;
   width: 60px;
   background-color: #ffffff;
   transition: left 0.3s ease;
}
.backArrow:hover {
  left: 5px;
}
.backFrame {
   background-color: #ffffff;
   width: 60px;
   height: 60px;
   object-fit: cover;
   
}


.backFrame1 {
  background-color: #ffffff;
   width: 60px;
   height: 60px;
   object-fit: cover;
}


.extra-button-1 {
   border: none; /* removes border */
   outline: none; /* removes outline */
   background-color: #ffffff;
   border-radius: 30px;
   line-height: normal;
   
   height: 60px;
   width: 60px;
   transition: background-color 0.3s ease;
}
.extra-button-1:hover {
  background-color: #d0d0d0;
}

.extra-1 {
  position: relative;
   left: 50%;
   transform: translate(-50%, -50%);
   text-align: left;
   border-radius: 13px;
   height: 100px;
   width: 40%;
   min-width: 400px;
}
.submit-button-4 {
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
.submit-button-4:hover {
  background-color: #1f6492;
  color: #ffffff;
  letter-spacing: 2px;
  width: 41%;
}

.welcome-back {
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

  .to-keep-connected-1 {
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

  .email-address-2 {
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

  .frame-4 {
   padding-left: 10px;
   height: 25px;
  }

  .frame-5 {
    padding-top: 3px;
   height: 35px;
  }

  .frame-6 {
    padding-top: 3px;
   height: 35px;
  }

  .frame-7 {
    padding-top:0px;
   height: 35px;
  }

  .email-address-3 {
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

  .password-3 {
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

  .password-4 {
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