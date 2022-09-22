<script setup>
import {ref} from 'vue'
const name1=ref('')
const name2=ref('')
const name3=ref('')
const name4=ref('')
const name5=ref('')
const meal1=ref('')
const meal2=ref('')
const meal3=ref('')
const meal4=ref('')
const meal5=ref('')
const formsubmitted=ref(false)

</script>

<template>
<a href="index.html">Home</a>
<br>
<a href="articles.html">Articles</a>
<br>
<a href="recipes.html">Recipes</a>
<br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
<h1>Resources for Educators</h1>
<h1>Class Profile Tool</h1>
<form>Child 1 name</form>
<input v-model='name1' placeholder='Bob'>
<p>Child 1 Meal Preference</p>
<input v-model='meal1'>
<form>Child 2 name</form>
<input v-model='name2'>
<form>Child 2 Meal Preference</form>
<input v-model='meal2'>
<form>Child 3 name</form>
<input v-model='name3'>
<form>Child 3 Meal Preference</form>
<input v-model='meal3'>
<form>Child 4 name</form>
<input v-model='name4'>
<form>Child 4 Meal Preference</form>
<input v-model='meal4'>
<form>Child 5 name</form>
<input v-model='name5'>
<form>Child 5 Meal Preference</form>
<input v-model='meal5'>
<br>
<button @click="formsubmitted =!formsubmitted">SUBMIT</button>



  <div class="card" width=150px height=300px>
  <img src="boyavatar.jpg" alt="Avatar" width=20%>
  <img src="girlavatar.jpg" alt="Avatar" width=20%>
  <img src="boyavatar.jpg" alt="Avatar" width=20%>
  <img src="girlavatar.jpg" alt="Avatar" width=20%>
  <img src="boyavatar.jpg" alt="Avatar" width=20%>
 </div>

<table width=100% bordercolor:black>


<tr style="table">
<td v-if="formsubmitted" text-align:center><b>{{name1}}</b></td>
<td v-if="formsubmitted" text-align:center><b>{{name2}}</b></td>
<td v-if="formsubmitted" text-align:center><b>{{name3}}</b></td>
<td v-if="formsubmitted" text-align:center><b>{{name4}}</b></td>
<td v-if="formsubmitted" text-align:center><b>{{name5}}</b></td>
</tr>

<tr>
<td v-if="formsubmitted"><b>{{meal1}}</b></td>
<td v-if="formsubmitted"><b>{{meal2}}</b></td>
<td v-if="formsubmitted"><b>{{meal3}}</b></td>
<td v-if="formsubmitted"><b>{{meal4}}</b></td>
<td v-if="formsubmitted"><b>{{meal5}}</b></td>
</tr>

<tr>
<td><img src="boyavatar.jpg" width=250px height=250px></td>
<td><img src="girlavatar.jpg" width=250px height=250px></td>
<td><img src="boyavatar.jpg" width=250px height=250px></td>
<td><img src="girlavatar.jpg" width=250px height=250px></td>
<td><img src="boyavatar.jpg" width=250px height=250px></td>
</tr>
</table>

</template>


<style scoped>
button {
  font-weight: bold;
  color:blue;
}
</style>
