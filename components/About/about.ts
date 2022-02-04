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
  bodyTextList: string[] = []

  mounted () {
    this.getAboutConent()
  }

  async getAboutConent () {
    try {
      this.aboutConent = await (await this.$axios.get('https://api.rankine-hill.com/about/?show_mainpage=true')).data.result

      if (this.aboutConent) {
        this.imageUrl = this.aboutConent[1].image
        // this.bodyText = this.aboutConent[0].body_text
        const matches = [...this.aboutConent[0].body_text.matchAll(/\<p\>(.*)\<\/p\>/g)]
        this.bodyTextList = matches.map(match => match[1])

        // .replaceAll('<p>', '<p class="mt-3 text-white sm:mt-4 text-2xl">')
      }
    } catch (err) {
      console.log(err)
    }
  }
}
