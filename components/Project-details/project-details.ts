import { Vue, Component } from 'nuxt-property-decorator'

import SectionHeader from '../SectionHeader/section-header'
import Modal from '../Modal/modal'

@Component({
  name: 'Project-details',
  components: {
    SectionHeader,
    Modal
  }
})
export default class ProjectDetails extends Vue {
  projectDtails: any = []
  imageUrl : string = ''
  pslug: string = ''
  active: string = 'block'
  activeSlide: number = 0

  displayModalBox: boolean = false
  displayModalBg: boolean = false
  options: any = {
    type: 'fade',
    perPage: 1,
    gap: 0,
    padding: 0,
    rewind: true,
    height: '40rem',
    cover: false,
    autoplay: true,
    interval: 4000,
    pagination: false,
    classes: {
      arrow: 'splide__arrow bg-transparent fill-current text-brand-footer text-5xl'
    }
  }

  created () {
    this.pslug = this.$route.query.pslug.toString()

    this.getProjectDtailsContent()
  }

  head () {
    return {
      title: this.projectDtails?.seo?.meta_title,
      meta: [
        {
          hid: 'description',
          description: this.projectDtails?.seo?.meta_description
        },
        {
          hid: 'keywords',
          keywords: this.projectDtails?.seo?.meta_keyword
        }
      ]
    }
  }

  async getProjectDtailsContent () {
    try {
      const resp = (await this.$axios.get(`https://api.rankine-hill.com/project/${this.pslug}`)).data.result[0]
      this.projectDtails = resp
      /* console.log('projectDtails', this.projectDtails) */

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
    this.active = 'block transform -translate-x-full'
    if (this.activeSlide === (this.projectDtails.image.gallery.length - 1)) {
      this.activeSlide = 0
    } else {
      this.activeSlide += 1
    }
    this.active = 'block'
  }

  prevSlide () {
    this.active = 'block transform translate-x-full'
    if (this.activeSlide === 0) {
      this.activeSlide = (this.projectDtails.image.gallery.length - 1)
    } else {
      this.activeSlide -= 1
    }
    this.active = 'block'
  }

  openModal () {
    this.displayModalBox = !this.displayModalBox
    this.displayModalBg = !this.displayModalBg
  }

  onModalBgClicked () {
    this.displayModalBox = false
    this.displayModalBg = false
  }
}
