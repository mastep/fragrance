<template>
  <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8 md:w-96 m-auto">
    <form @submit="register"
          :action="url"
          method="post">
      <input-text name="userName" placeholder="Как твоё имя?" v-model="inputValue"></input-text>
      <input-file name="userPhoto" placeholder="Фото" v-model="inputPhoto"></input-file>
      <div class="text-right">
        <button-send button-title="Далее" :button-can-send=!!inputValue></button-send>
      </div>
    </form>
    <div class="overflow-y-auto h-96">
      <ul>
        <li v-for="(item) in userList" :key="item">
          <img v-if="!!item.photo" :src="url_img+item.photo" class="rounded w-16 my-2"/> {{item.name}}
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
import InputFile from "@/forms/InputFile";

export default {
  components: {InputFile, InputText, ButtonSend},
  data: function() {
    return {
      url_img:process.env.VUE_APP_URL.replace("/api",""),
      url: process.env.VUE_APP_URL+"/forms/register",
      userName: '',
      inputPhoto: '',
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
      //alert(this.inputPhoto)
      axios
          .post(
              this.url,
              {
                'userName': this.inputValue,
                'userPhoto': this.inputPhoto,
              },
              {
                'Content-Type' : 'multipart/form-data',
              }
          )
          .then(this.list);
    },
    list: function () {
      this.socket.emit('eventUpdating');
      this.socket.on('eventData', (data) => {
        this.userList=data;
      })
    }
  },
  mounted() {
    this.list();
  }
}
</script>