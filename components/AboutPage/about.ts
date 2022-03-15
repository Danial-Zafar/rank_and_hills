import { Vue, Component } from 'nuxt-property-decorator'

import SectionHeader from '../SectionHeader/section-header'

@Component({
  name: 'About',
  components: {
    SectionHeader
  }
})
export default class Offices extends Vue {
  about: any = []
  imageUrl : string = ''
  bodyTextList: string[] = []

  mounted () {
    this.getAboutContent()
  }

  async getAboutContent () {
    try {
      const resp = (await this.$axios.get('https://api.rankine-hill.com/about/')).data.result
      this.about = resp
      console.log('resp', resp)
    } catch (err) {
      console.log(err)
    }
  }

  sanitizeText (address: string) {
    const matches = [...address.matchAll(/\<p\>(.*)\<\/p\>/g)]
    const match = matches.map(match => match[1])
    // console.log('match', match)
    return match
  }
}
