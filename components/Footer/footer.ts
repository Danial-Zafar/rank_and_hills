import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  name: 'Footer'
})
export default class Footer extends Vue {
  companyGroup: any = null

  mounted () {
    this.getAboutConent()
  }

  async getAboutConent () {
    try {
      this.companyGroup = await (await this.$axios.get('https://api.rankine-hill.com/groupcompany/')).data.result

      if (this.companyGroup) {
        //console.log(this.companyGroup)
      }
    } catch (err) {
      console.log(err)
    }
  }
}
