<template>
  <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8 md:w-96 m-auto">
    <div>
      <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700"
      ></label>
      <input
          v-model="userName" placeholder="Как твоё имя?"
          @input='evt=>message1=evt.target.value'
          type="text"
          class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        h-16 text-2xl md:h-auto md:text-base
      "
      />
      <div class="text-right">
        <button-send button-title="Далее" :button-can-send=!!message1></button-send>
      </div>
    </div>
  </main>




</template>
<script>

import 'tw-elements';
import ButtonSend from "@/ButtonSend";

export default {
  components: {ButtonSend},
  data() {
    return {
      userName: '',
      message1: ""
    }
  }
}
</script>