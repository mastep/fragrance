<template>
  <button :disabled="buttonCanSend!==true" type="submit" data-mdb-ripple="true" data-mdb-ripple-color="light" class="h-16 w-40 md:h-auto md:w-auto inline-block my-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" v-bind:class="{ 'opacity-25': buttonCanSend!==true }">
    <span class="grid grid-cols-2">
      <span>{{buttonTitle}}</span>
      <!--<span>
        <span class="spinner-border animate-spin flex right-0 w-4 h-4 rounded-full mx-3" role="status"></span>
      </span>-->
    </span>
  </button>

</template>
<script>
export default {
  props: {'buttonTitle': String,'buttonCanSend': Boolean}
}
</script>