import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  name: 'Footer'
})
export default class Footer extends Vue {
  companyGroup: any = null
  socialMediaIcons: any = null

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
    this.getAboutConent()
    this.getSocialMediaIcons()
  }

  async getAboutConent () {
    try {
      this.companyGroup = await (await this.$axios.get('https://api.rankine-hill.com/groupcompany/')).data.result
    } catch (err) {
      console.log(err)
    }
  }

  async getSocialMediaIcons () {
    try {
      this.socialMediaIcons = await (await this.$axios.get('https://api.rankine-hill.com/socialmedia/')).data.result
      console.log ('social', this.socialMediaIcons)
    } catch (err) {
      console.log(err)
    }
  }

  async onSubmit () {
    try {
      this.companyGroup = await this.$axios.post('https://api.rankine-hill.com/feedback/', this.model)
    } catch (err) {
      console.log(err)
    }
  }

  splitIconName (icon: string) {
    const iconName = icon.split(' ')[1].split('-')
    return iconName.slice(1, iconName.length).join('-')
  }
}
