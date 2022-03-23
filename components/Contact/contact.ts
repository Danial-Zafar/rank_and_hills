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
  cityName = 'Singapore'
  cityImg = require('~/assets/img/singapore.png')

  created () {
    if (this.officeModel?.country) {
      this.cityName = this.officeModel?.country
     // this.officeModel = this.removeTag(this.officeModel)
    }
  }

  onClickchangeCity (cityName: string) {
    this.cityName = cityName
    this.cityImg = require(`~/assets/img/${cityName.toLowerCase()}.png`)
    this.$emit('getOfficeByName', cityName)
  }

  sanitizeAddress (address: string) {
    const matches = [...address.matchAll(/\<p\>(.*)\<\/p\>/g)]
    const match = matches.map(match => match[1])[0]
    return match.split('<br />')
  }
}
