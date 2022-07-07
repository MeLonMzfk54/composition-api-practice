<template>
  <div class="container">
    <form class="card" @submit.prevent="submitForm">
      <h1>Auth</h1>
      <pre>
        {{form.email}}
      </pre>
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email.value" >
      </div>

      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" v-model="form.password.value" id="password">
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
        value: 'testemail@mail.ru',
        validators: {
          required
        }
      },
      password: {
        value: 'myPassword12345',
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
