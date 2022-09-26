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
        <li v-for="(item) in userList" :key="item">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </main>
</template>
<script>
import axios from 'axios';
import io from "socket.io-client";
import 'tw-elements';
import ButtonSend from "@/forms/ButtonSend";
import InputText from "@/forms/InputText";

export default {
  components: {InputText, ButtonSend},
  data: function() {
    return {
      url: process.env.VUE_APP_URL+"/forms/register",
      userName: '',
      inputValue: '',
      userList: [],
      socket: {},
    }
  },
  created() {
    //connecting to our host
    this.socket = io("http://188.225.42.19:3000");
  },
  methods:{
    register: function (e) {
      e.preventDefault();
      axios
          .post(this.url, {'userName': this.inputValue})
          .then(setTimeout(this.list, 100))
          .catch(function (error) {
            console.log(error);
          });
    },
    mycall: function(){
      axios
        .get('http://188.225.42.19:8000/api/forms/register')
        .then((res)=>{this.userList= res.data.data})
    },
    list: function () {
      this.socket.emit('chat message', '1');
      this.socket.on('chat message', (data) => {
        this.mycall();
        data;
      })
    }
  },
  mounted() {
    this.mycall();
  }
}
</script>