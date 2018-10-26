<script>
import Layout from '@layouts/main'
import { authGetters, authMethods } from '@state/helpers'

export default {
  props: {
    redirectFrom: {
      type: String,
      default: '/'
    }
  },
  components: { Layout },
  data() {
    return {
      username: '',
      password: '',
      error: null
    }
  },
  computed: {
    ...authGetters
  },
  methods: {
    ...authMethods,
    async tryLogIn() {
      try {
        await this.logIn(this.$data)

        this.resetError()
        this.password = ''
        this.$router.push(this.redirectFrom)
      } catch (e) {
        this.error = e.message
      }
    },
    resetError() {
      this.error = null
    }
  },
  watch: {
    password: 'resetError',
    username: 'resetError',
  }
}
</script>

<template>
  <Layout>
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <div class="card">
          <div class="card-content">
            <form @submit.prevent="tryLogIn">
              <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="text" v-model="username" required>
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="password" v-model="password" required>
                  <span class="icon is-small is-left">
                    <i class="fa fa-key"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <button class="button is-primary" type="submit">Submit</button>
                </div>
                <p v-if="error" class="help is-danger">{{ error }}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
