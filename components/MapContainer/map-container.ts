import { Vue, Component } from 'nuxt-property-decorator'

import Contact from '../Contact/contact'

@Component({
  name: 'MapConainer',
  components: {
    Contact
  }
})
export default class MapContainer extends Vue {
  cityName = ''

  get city () {
    return this.cityName
  }

  changeCity (cityName: string) {
    this.cityName = cityName
  }
}
