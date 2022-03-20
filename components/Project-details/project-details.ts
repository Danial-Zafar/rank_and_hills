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
      // title: 'dummy title',
       title: this.projectDtails.meta_title,
      meta: [
        {
          hid: 'description',
          //description: 'dummy decritption'
          description: this.projectDtails.meta_description
        },
        {
          hid: 'keywords',
          //keywords: 'WISMA GEYLANG SERAI, Singapore, Civic, M&E Engineering'
          keywords: this.projectDtails.meta_keyword
        }
      ]
    }
  } 

  async getProjectDtailsContent () {
    
    try {
      const resp = (await this.$axios.get(`https://api.rankine-hill.com/project/${this.pslug}`)).data.result[0]
      this.projectDtails = resp
      console.log('projectDtails', this.projectDtails)

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
  }

  setImageClasses (index: number) {
    if (index === 0) {
      return 'col-span-full row-span-1'
    } else if (index === 1 || index === 2) {
      return 'col-span-1 row-start-2 row-end-3'
    } else if (index === 3) {
      return 'col-span-1 row-span-2'
    } else if (index === 4) {
      return 'col-start-2 row-end-4'
    } else if (index === 5) {
      return 'col-start-2 row-end-5'
    } else {
      return 'col-span-full'
    }
  }

  nextSlide () {
  }

  prevSlide () {

  }
}
