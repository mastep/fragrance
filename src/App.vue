<template>
  <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8 md:w-96 m-auto">
    <form @submit="register"
          :action="url"
          method="post">
      <div class="relative">
        <input-text name="userName" placeholder="Как твоё имя?" v-model="inputValue"></input-text>
        <input-file name="userPhoto" placeholder="Фото" v-model="inputPhoto"></input-file>
      </div>
      <div class="text-right">
        <button-send button-title="Далее" :button-can-send=!!inputValue></button-send>
      </div>
    </form>
    <div class="overflow-y-auto h-96 scrollbar">
      <ul role="list" class=" divide-y divide-slate-200">

        <li v-for="(item, index) in userList" :key="item" class="flex flex-row p-4 bg-white mb-4 mr-4 rounded">
          <div class="w-12" v-bind:class="{ 'order-last': index % 2}">
            <img v-if="!!item.photo" class="h-10 w-10 rounded-full" :src="url_img+item.photo" alt="" />
          </div>
          <div class="overflow-hidden w-full px-2">
            <p class="text-sm font-medium text-slate-900">{{item.name}}</p>
          </div>
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