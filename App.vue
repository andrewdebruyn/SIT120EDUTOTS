<script setup>
import {ref} from 'vue'

const count = ref(0)
const formsubmitted =ref(false)
const firstName=ref('')
const email=ref('')

</script>

<template>
  <a href="articles.html">Articles</a>
  <br>
   <a href="recipes.html">Recipes</a>
  <br>
  <a href="planner.html">Resources</a>
<br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>

  <div class=about>
  <p>
  <h1>
  Who We Are
  </h1>
 <h4>
 We are a a group of educators passionate about early childhood education.
 <br>
 Edutots is a free resource for parents and educators.
 <br>
 Check out our free resources and please sign up for our newsletter
 </h4>
</p>

  </div>

  <form>
  <div class=form>
  <label>Enter your name       </label>
 <input v-model='firstName'>

 <label> Enter your email address </label>
 <input v-model='email'>
 </div>
</form>
<button @click="formsubmitted =!formsubmitted">SUBMIT</button>
<h3 v-if="formsubmitted">Thank you for subscribing {{firstName}}</h3>

</template>


<style scoped>
button {
  font-weight: bold;
}


</style>
