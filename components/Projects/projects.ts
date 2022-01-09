import { Vue, Component } from 'nuxt-property-decorator'

import SectionHeader from '../SectionHeader/section-header'

@Component({
  name: 'Projects',
  components: {
    SectionHeader
  }
})
export default class Projects extends Vue {}
