import { Vue, Component } from 'nuxt-property-decorator'
import { OfficeModel } from '~/models/office.model'

import Contact from '../Contact/contact'

@Component({
  name: 'MapConainer',
  components: {
    Contact
  }
})
export default class MapContainer extends Vue {
  cityName = ''
  offices: any[] | undefined
  officeModel: any = null

  async mounted () {
    await this.getoffices()
    this.getOfficeByName('Singapore')
  }

  get city () {
    return this.cityName
  }

  changeCity (cityName: string) {
    console.log('3')
    this.cityName = cityName
  }

  getOfficeByName (courtyName:string) {
    console.log('2')
    if (this.offices) {
      const office : any = this.offices.find((x) => {
        if (x.country === courtyName) {
          this.changeCity(courtyName)

          return x.office[0]
        }
      })

      this.officeModel = {
        country: this.city,
        address: office.office[0].address,
        fax: office.office[0].fax,
        geocoordinate: office.office[0].geocoordinate,
        google_map: office.office[0].google_map,
        phone: office.office[0].phone,
        title: office.office[0].title
      }

      console.log(this.officeModel)
      return this.officeModel
    }
  }

  async getoffices () {
    try {
      this.offices = await (await this.$axios.get('https://api.rankine-hill.com/offices/')).data.result
    // console.log('office', this.offices)
    } catch (err) {
      console.log(err)
    }
  }
}
