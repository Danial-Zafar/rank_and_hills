import { Vue, Component } from 'nuxt-property-decorator'

import Header from '@/components/Header/header.vue'
import Footer from '@/components/Footer/footer.vue'
import ProjectDetails from '@/components/Project-details/project-details.vue'
import LoadingSpinner from '@/components/LoadingSpinner/loading-spinner.vue'


@Component({
  components: {
    LoadingSpinner,
    Header,
    ProjectDetails,
    Footer
  }
})

export default class ProjectDetailsComponent extends Vue {
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
