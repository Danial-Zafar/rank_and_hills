import { Vue, Component } from 'nuxt-property-decorator'


@Component({
  name: 'CTA'
})
export default class CTA extends Vue {
  sliderImage: any = require('~/assets/img/beach-work.jpg')
}
