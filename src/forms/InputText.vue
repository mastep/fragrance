<template>
  <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700"
  ></label>
  <input
      :name="name" :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
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
</template>

<script>
export default {
  name: "InputText",
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
}
</script>

<style scoped>

</style>