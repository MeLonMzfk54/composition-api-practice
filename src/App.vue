<template>
  <div class="container">
    <form class="card" @submit.prevent="submitForm">
      <h1>Auth</h1>
      <div class="form-control" :class="{invalid: !form.email.valid && form.email.touched}">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email.value" @blur="form.email.blur">
        <div class="errors" v-if="form.email.touched">
        <small v-if="form.email.errors.required">Please enter email</small>
        </div>
      </div>

      <div class="form-control" :class="{invalid: !form.password.valid && form.password.touched}">
        <label for="password">Password</label>
        <input type="password" v-model="form.password.value" id="password" @blur="form.email.blur">
        <div class="errors" v-if="form.password.touched">
          <small v-if="form.password.errors.required">Please enter password</small>
          <small v-else-if="form.password.errors.minLength">Password length must be more then 8. Now it is {{ form.password.value.length }} </small>
        </div>
      </div>

      <button class="btn primary" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import {useForm} from "@/hooks/useForm";

const required = val => !!val
const minLength = num => val => val.length >= num

export default {
  setup() {
    const form = useForm({
      email: {
        value: '',
        validators: {
          required
        }
      },
      password: {
        value: '',
        validators: {
          required,
          minLength: minLength(8)
        }
      }
    })

    const submitForm = () => {

    }

    return {
      form
    }
  }
}
</script>

<style lang="scss">

</style>
