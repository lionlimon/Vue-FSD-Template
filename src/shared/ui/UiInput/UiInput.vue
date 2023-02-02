<template>
  <label :class="['input', modifiers]">
    <Transition name="fade">
      <span
        v-show="label && labelIsVisible"
        class="input__label input__label--inner"
      >
        {{ label }}
      </span>
    </Transition>

    <span class="input__inner">
      <input
        v-model="inputValue"
        class="input__native"
        :type="type"
        :placeholder="placeholder"
        :name="name"
        @focus="focused = true"
        @blur="focused = false"
      >
      <SvgIcon
        class="input__icon"
        name="search"
        width="24"
        height="24"
      />
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import SvgIcon from '@/shared/ui/SvgIcon';

const focused = ref(false);
const props = defineProps<{
  label?: string,
  placeholder?: string,
  name?: string,
  type?: string,
  hasError?: boolean,
  modelValue?: string,
}>();

const emit = defineEmits(['update:modelValue']);

const inputValue = computed({
  get() {
    return props.modelValue;
  },

  set(value) {
    emit('update:modelValue', value);
  },
});

const labelIsVisible = computed(() => (focused.value || inputValue.value));
const modifiers = computed(() => ({
  'input--active': labelIsVisible.value,
}));
</script>

<style scoped lang="scss" src="./UiInput.scss"></style>
