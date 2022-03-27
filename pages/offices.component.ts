import { Vue, Component } from 'nuxt-property-decorator'

import Header from '@/components/Header/header.vue'
import Footer from '@/components/Footer/footer.vue'
import Offices from '@/components/Offices/offices.vue'
import LoadingSpinner from '@/components/LoadingSpinner/loading-spinner.vue'

@Component({
  components: {
    LoadingSpinner,
    Header,
    Offices,
    Footer
  }
})
export default class OfficesComponent extends Vue {
  displayLoadingSpinner = true
  beforeCreate () {
    this.$nextTick(() => {
      this.displayLoadingSpinner = true
    })
  }

  mounted () {
    this.$nextTick(() => {
      this.displayLoadingSpinner = false
    })
  }
}
