import { Vue, Component } from 'nuxt-property-decorator'

import SectionHeader from '../SectionHeader/section-header'

@Component({
  name: 'Offices',
  components: {
    SectionHeader
  }
})
export default class Offices extends Vue {
  offices: any = null
  subjects: any[] | null = null
  selectedCountry: string = 'Singapore'

  model = {
    name: null,
    company: null,
    contact: null,
    comments: null,
    email: null,
    subject: "",
    subscribe_news: null
  }

  mounted () {
    this.getSubjects()
    this.getOfficesContent()
  }

  async getSubjects () {
    try {
      const resp = (await this.$axios.get('https://api.rankine-hill.com/feedback/')).data.result
      this.subjects = resp

      console.log('subjects', this.subjects)
    } catch (err) {
      console.log(err)
    }
  }

  async getOfficesContent () {
    try {
      const resp = (await this.$axios.get('https://api.rankine-hill.com/offices/')).data.result
      console.log('resp', resp)
      this.offices = resp
        .reduce((obj: any, item: any) => {
          obj[item.country] = { url: item.url, offices: item.office, image: item.image }
          return obj
        }, {})
      console.log('offices', this.offices)
    } catch (err) {
      console.log(err)
    }
  }

  sanitizeAddress (address: string) {
    const matches = [...address.matchAll(/\<p\>(.*)\<\/p\>/g)]
    const match = matches.map(match => match[1])[0]
    return match.split('<br />')
  }

  async onSubmit () {
    try {
      const resp = await this.$axios.post('https://api.rankine-hill.com/feedback/', this.model)
      console.log('resp', resp)
    } catch (err) {
      console.log(err)
    }
  }
}
