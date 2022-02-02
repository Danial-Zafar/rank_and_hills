import { Vue, Component } from 'nuxt-property-decorator'

import SectionHeader from '../SectionHeader/section-header'

@Component({
  name: 'About',
  components: {
    SectionHeader
  }
})
export default class About extends Vue {
  aboutConent: any
  imageUrl : string = ''
  bodyText: string = ''

  mounted () {
    this.getAboutConent()
  }

  async getAboutConent () {
    try {
      this.aboutConent = await (await this.$axios.get('https://api.rankine-hill.com/about/?show_mainpage=true')).data.result

      if (this.aboutConent) {
        this.imageUrl = this.aboutConent[1].image
        this.bodyText = this.aboutConent[0].body_text
      }
    } catch (err) {
      console.log(err)
    }
  }
}
