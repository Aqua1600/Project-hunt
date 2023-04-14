<template>
    <h1>This is feed page</h1>
    <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
</template>

<script setup>
import {onMounted, ref } from "vue";
// eslint-disable-next-line
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(false);
let auth;
onMounted(() => {
  auth = getAuth();
    onAuthStateChanged(auth, (user) => {
       if (user) {
        isLoggedIn.value = true;
       } else {
        isLoggedIn.value = false;
       }
    });
});

// eslint-disable-next-line
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/")
  });
};
</script>

<style></style>