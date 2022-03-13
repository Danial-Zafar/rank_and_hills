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
  selectedCountry: string = 'Singapore'

  model = {
    name: null,
    company: null,
    contact: null,
    comments: null,
    email: null,
    subject: null,
    subscribe_news: null
  }

  mounted () {
    this.getOfficesContent()
  }

  async getOfficesContent () {
    try {
      const resp = (await this.$axios.get('https://api.rankine-hill.com/offices/')).data.result
      this.offices = resp
        .reduce((obj: any, item: any) => {
          obj[item.country] = { url: item.url, offices: item.office }
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
}
