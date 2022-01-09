import { Vue, Component } from 'nuxt-property-decorator'

import SectionHeader from '../SectionHeader/section-header'

@Component({
  name: 'Contact',
  components: {
    SectionHeader
  }
})
export default class Contact extends Vue {}
