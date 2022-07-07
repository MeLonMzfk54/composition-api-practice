import {ref, reactive} from 'vue'

const not = val => !val

export function useField(field) {
  const valid = ref(true)
  const value = ref(field.value)
  const errors = reactive({})

  Object.keys(field.validators ?? {}).map(key => {
    const isValid = field.validators[key](value.value)
    errors[key] = not(isValid)
  })

  return {value, valid, errors}
}