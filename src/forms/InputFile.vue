<template>
  <div class="flex justify-end items-end w-full">
    <label class="cursor-pointer text-black bg-white-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-right inline-flex items-center -mt-11 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
      <input accept="image/*" type="file" class="hidden" @change="Preview_image" />
    </label>
  </div>

  <img :src="url" class="rounded-full w-10 absolute -mt-10 right-0"/>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      url: null,
      image: null,
      modelValue: ''
    }
  },
  methods: {
    Preview_image(e) {

      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;

      var reader = new FileReader();

      reader.onload = ()=>{
        this.modelValue=reader.result;
        this.$emit('update:modelValue', reader.result)
      }
      this.url= URL.createObjectURL(files[0])
      reader.readAsDataURL(files[0]);

    }
  },
  emits: ['update:modelValue'],
}
</script>