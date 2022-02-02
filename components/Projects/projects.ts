import { Vue, Component } from 'nuxt-property-decorator'

import SectionHeader from '../SectionHeader/section-header'

@Component({
  name: 'Projects',
  components: {
    SectionHeader
  }
})
export default class Projects extends Vue {
  projects: any = null

  mounted () {
    this.getAboutConent()
  }

  async getAboutConent () {
    try {
      this.projects = await (await this.$axios.get('https://api.rankine-hill.com/project/?homepage=true')).data.result

      if (this.projects) {
      // console.log(this.projects)
      }
    } catch (err) {
      console.log(err)
    }
  }
}
