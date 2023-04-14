import { createApp } from 'vue'
import App from './App.vue'
import "./styleguide.css"
import "./style.css"
import router from "./router"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALV0GEWEyVMQL9cu3eUAB_4zL-pxYEbDE",
  authDomain: "project-hunt-757d4.firebaseapp.com",
  projectId: "project-hunt-757d4",
  storageBucket: "project-hunt-757d4.appspot.com",
  messagingSenderId: "1060373476602",
  appId: "1:1060373476602:web:715b77285bded9ba050543"
};

initializeApp(firebaseConfig, {});

const app = createApp(App)

app.use(router)

app.mount('#app')
