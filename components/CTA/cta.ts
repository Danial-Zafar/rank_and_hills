import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  name: 'CTA'
})
export default class CTA extends Vue {
  hero: any = null
  sliderImage: any = require('~/assets/img/beach-work.jpg')

  content = [
    {
      title: 'Experience Beyond',
      text: 'We believe that when clients choose us, they often make decisions based on our people. Whether for residential, commercial, institutional or infrastructural projects, our engineers are hands-on collaborators, confidently delivering innovative, space-saving and environmentally sensitive designs.',
      caption: 'Outpost Hotel, Singapore',
      imgUrl: '~/assets/img/beach-work.jpg'
    },
    {
      title: 'Experience Malaysia',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
      caption: 'Outpost Hotel, Malaysia',
      imgUrl: '~/assets/img/beach-work.jpg'
    },
    {
      title: 'Experience Malaysia',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
      caption: 'Outpost Hotel, Malaysia',
      imgUrl: '~/assets/img/beach-work.jpg'
    },
    {
      title: 'Experience Beyond',
      text: 'We believe that when clients choose us, they often make decisions based on our people. Whether for residential, commercial, institutional or infrastructural projects, our engineers are hands-on collaborators, confidently delivering innovative, space-saving and environmentally sensitive designs.',
      caption: 'Outpost Hotel, Singapore',
      imgUrl: '~/assets/img/beach-work.jpg'
    },
    {
      title: 'Experience Myanmar',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
      caption: 'Outpost Hotel, Myanmar',
      imgUrl: '~/assets/img/beach-work.jpg'
    },
    {
      title: 'Experience Beyond',
      text: 'We believe that when clients choose us, they often make decisions based on our people. Whether for residential, commercial, institutional or infrastructural projects, our engineers are hands-on collaborators, confidently delivering innovative, space-saving and environmentally sensitive designs.',
      caption: 'Outpost Hotel, Singapore',
      imgUrl: '~/assets/img/beach-work.jpg'
    },
    {
      title: 'Experience Vietnam',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
      caption: 'Outpost Hotel, Vietnam',
      imgUrl: '~/assets/img/beach-work.jpg'
    }
  ]

  // content = {
  //   singapore: {
  //     title: 'Experience Beyond',
  //     text: 'We believe that when clients choose us, they often make decisions based on our people. Whether for residential, commercial, institutional or infrastructural projects, our engineers are hands-on collaborators, confidently delivering innovative, space-saving and environmentally sensitive designs.',
  //     caption: 'Outpost Hotel, Singapore',
  //     imgUrl: '~/assets/img/beach-work.jpg'
  //   },
  //   indonesia: {
  //     title: 'Experience Malaysia',
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
  //     caption: 'Outpost Hotel, Malaysia',
  //     imgUrl: '~/assets/img/beach-work.jpg'
  //   },
  //   malaysia: {
  //     title: 'Experience Malaysia',
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
  //     caption: 'Outpost Hotel, Malaysia',
  //     imgUrl: '~/assets/img/beach-work.jpg'
  //   },
  //   mongolia: {
  //     title: 'Experience Beyond',
  //     text: 'We believe that when clients choose us, they often make decisions based on our people. Whether for residential, commercial, institutional or infrastructural projects, our engineers are hands-on collaborators, confidently delivering innovative, space-saving and environmentally sensitive designs.',
  //     caption: 'Outpost Hotel, Singapore',
  //     imgUrl: '~/assets/img/beach-work.jpg'
  //   },
  //   myanmar: {
  //     title: 'Experience Myanmar',
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
  //     caption: 'Outpost Hotel, Myanmar',
  //     imgUrl: '~/assets/img/beach-work.jpg'
  //   },
  //   thailand: {
  //     title: 'Experience Beyond',
  //     text: 'We believe that when clients choose us, they often make decisions based on our people. Whether for residential, commercial, institutional or infrastructural projects, our engineers are hands-on collaborators, confidently delivering innovative, space-saving and environmentally sensitive designs.',
  //     caption: 'Outpost Hotel, Singapore',
  //     imgUrl: '~/assets/img/beach-work.jpg'
  //   },
  //   vietnam: {
  //     title: 'Experience Vietnam',
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
  //     caption: 'Outpost Hotel, Vietnam',
  //     imgUrl: '~/assets/img/beach-work.jpg'
  //   }
  // }

  selectedCountry = 'singapore'
  selectedSlide: number = 0
  countries: string[] = []

  public splitTitle (title: string): string[] {
    return title.split(/\s+/gm)
  }

  mounted () {
    this.getHero()
  }

  async getHero () {
    try {
      this.hero = await (await this.$axios.get('https://api.rankine-hill.com/homeslideshow/')).data.result[0]?.gallery
      if (this.hero) {
        this.countries = this.hero.map(slide => slide.country)
        console.log('hero', this.hero)
      }
    } catch (err) {
      console.log(err)
    }
  }
}
