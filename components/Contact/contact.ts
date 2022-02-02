import { Vue, Component } from 'nuxt-property-decorator'
import { Prop } from 'vue-property-decorator'

import SectionHeader from '../SectionHeader/section-header'
import Map from '../Map.vue'
import { OfficeModel } from '~/models/office.model'

@Component({
  name: 'Contact',
  components: {
    SectionHeader,
    Map
  }
})
export default class Contact extends Vue {
  // @Prop({ default: 'singapore' }) city !: string
  @Prop({ default!: null }) officeModel: any
  @Prop({ default!: null }) offices: any
  cityName = ''
  cityImg = require('~/assets/img/singapore.png')

  created () {
    console.log('prop office model', this.offices)

    if (this.officeModel?.country) {
      this.cityName = this.officeModel?.country
    }
  }

  onClickchangeCity (cityName: string) {
    this.cityName = cityName
   // this.cityImg = require(`~/assets/img/${cityName}.png`)
    this.$emit('changeCity', cityName)
  }
}
