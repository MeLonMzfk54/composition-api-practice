import {ref, reactive, watch} from 'vue'

const not = val => !val

export function useField(field) {
  const valid = ref(true)
  const value = ref(field.value)
  const errors = reactive({})

  const reassign = val => {
    valid.value = true;
    Object.keys(field.validators ?? {}).map(key => {
      const isValid = field.validators[key](val)
      errors[key] = not(isValid)
      if (not(isValid)) {
        valid.value = false;
      }
    })
  }

  watch(value, reassign)
  reassign(value.value)

  return {value, valid, errors}
}