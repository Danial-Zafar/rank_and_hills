import { Vue, Component } from 'nuxt-property-decorator'
import { Prop } from 'vue-property-decorator'

import SectionHeader from '../SectionHeader/section-header'
import Map from '../Map.vue'

@Component({
  name: 'Contact',
  components: {
    SectionHeader,
    Map
  }
})
export default class Contact extends Vue {
  @Prop({ default: 'singapore' }) city !: string
  cityName = 'singapore'
  cityImg = require('~/assets/img/singapore.png')

  created () {
    this.cityName = this.city
  }

  onClickchangeCity (cityName: string) {
    this.cityName = cityName
    this.cityImg = require(`~/assets/img/${cityName}.png`)
    this.$emit('changeCity', cityName)
  }
}
