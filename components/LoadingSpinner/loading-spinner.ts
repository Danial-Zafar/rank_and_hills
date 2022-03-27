import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  name: 'LoadingSpinner'
})
export default class LoadingSpinner extends Vue {
  loading = false

  start () {
    console.log('inside start')
    this.loading = true
  }

  finish () {
    console.log('inside finish')
    this.loading = false
  }
}
