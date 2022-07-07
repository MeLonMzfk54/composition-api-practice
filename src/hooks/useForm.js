import {ref, reactive, computed} from 'vue'
import {useField} from "@/hooks/useField";

export function useForm(init = {}) {
  const form = reactive({})
  const validKey = 'valid'
  for (const [key, value] of Object.entries(init)) {
    form[key] = useField(value)
  }

  const withoutValid = key => key !== validKey

  form[validKey] = computed(() => {
    return Object.keys(form).filter(withoutValid).reduce((acc, key) => {
      if (acc) {
        acc = form[key].valid
      }
      return acc
    }, true)
  })
  return form
}