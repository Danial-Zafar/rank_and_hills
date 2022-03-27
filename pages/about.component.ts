import { Vue, Component } from 'nuxt-property-decorator';

import Header from '@/components/Header/header.vue';
import Footer from '@/components/Footer/footer.vue'
import About from '@/components/AboutPage/about.vue'
import LoadingSpinner from '@/components/LoadingSpinner/loading-spinner.vue'

@Component({
  components: {
    LoadingSpinner,
    Header,
    About,
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
    setTimeout(() => {
      this.displayLoadingSpinner = false
    }, 500)
  }
}
