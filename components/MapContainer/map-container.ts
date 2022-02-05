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
    this.cityName = cityName
  }

  getOfficeByName (courtyName:string) {
    if (this.offices) {
      const office : any = this.offices.find((x) => {
        if (x.country === courtyName) {
          this.changeCity(courtyName)
          return x.office[0]
        } else {
          return null
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

      return this.officeModel
    }
  }

  async getoffices () {
    try {
      this.offices = await (await this.$axios.get('https://api.rankine-hill.com/offices/')).data.result
    } catch (err) {
      console.log(err)
    }
  }
}
