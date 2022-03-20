import { Vue, Component } from 'nuxt-property-decorator'

import SectionHeader from '../SectionHeader/section-header'

@Component({
  name: 'Project-details',
  components: {
    SectionHeader
  }
})
export default class ProjectDetails extends Vue {
  projectDtails: any = []
  imageUrl : string = ''
  pslug: string = ''

   
  created () {
    this.pslug = '' + this.$route.query.pslug

    this.getProjectDtailsContent()
  }

  head(){
    return {
      title: 'dummy title',
      // title: this.projectDtails.meta_title,
      meta: [
        {
          hid: 'description',
          description: 'dummy decritption'
          // description: this.projectDtails.meta_description
        },
        {
          hid: 'keywords',
          keywords: 'WISMA GEYLANG SERAI, Singapore, Civic, M&E Engineering'
          // keywords: this.projectDtails.meta_keyword
        }
      ]
    }
  } 

  async getProjectDtailsContent () {
    try {
      const resp = (await this.$axios.get(`https://api.rankine-hill.com/project/${this.pslug}`)).data.result[0]
      this.projectDtails = resp

      let matches: string = ''
      if (this.projectDtails.body_text) {
        matches = this.projectDtails.body_text
      }

      const regex = /(<([^>]+)>)/ig

      matches = matches.replace(regex, '')

      this.projectDtails = {
        ...this.projectDtails,
        body_text: matches
      }
    } catch (err) {
      console.log(err)
    }
  }

  onClickBack () {
    this.$router.push('/projects')
  }

  nextProject (pslug: string) {
    if (pslug) {
      this.pslug = pslug.replace('https://www.rankine-hill.com/project/', '')
      this.getProjectDtailsContent()
    }
    // div.relative>fa.absolute.bottom-0.left-0
    // div.relative>fa.absolute.bottom-0.right-0
  }
}
