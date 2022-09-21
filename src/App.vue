<template>
  <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8 md:w-96 m-auto">
    <form @submit="register"
          :action="url"
          method="post">
      <input-text name="userName" placeholder="Как твоё имя?" v-model="inputValue"></input-text>
      <div class="text-right">
        <button-send button-title="Далее" :button-can-send=!!inputValue></button-send>
      </div>
    </form>
    <div class="overflow-y-auto h-96">
      <ul>
        <li v-for="(item) in userList">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </main>
</template>
<script>
import axios from 'axios';
import 'tw-elements';
import ButtonSend from "@/forms/ButtonSend";
import InputText from "@/forms/InputText";

export default {
  components: {InputText, ButtonSend},
  data() {
    return {
      url: process.env.VUE_APP_URL+"/forms/register",
      userName: '',
      inputValue: '',
      userList: Array,
    }
  },
  methods:{
    register: function (e) {
      e.preventDefault();
      axios
          .post(this.url, {'userName': this.inputValue})
          .then(response => {
            this.list();
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    list: function () {
      axios
          .get(this.url)
          .then((response) => this.userList=response.data.data)
    }
  },
  mounted() {
    this.list();
  }
}
</script>