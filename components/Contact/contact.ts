import { Vue, Component } from 'nuxt-property-decorator'

import SectionHeader from '../SectionHeader/section-header'
import Map from '../Map.vue'

@Component({
  name: 'Contact',
  components: {
    SectionHeader,
    Map
  }
})
export default class Contact extends Vue {
  city: string = 'singapore'
}
