import { Vue, Component } from 'nuxt-property-decorator'

import SectionHeader from '../SectionHeader/section-header'

@Component({
  name: 'About',
  components: {
    SectionHeader
  }
})
export default class About extends Vue {}
