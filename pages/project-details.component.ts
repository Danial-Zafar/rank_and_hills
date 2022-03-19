import { Vue, Component } from 'nuxt-property-decorator'

import Header from '@/components/Header/header.vue'
import Footer from '@/components/Footer/footer.vue'
import ProjectDetails from '@/components/Project-details/project-details.vue'

@Component({
  components: {
    Header,
    ProjectDetails,
    Footer
  }
})

export default class ProjectDetailsComponent extends Vue {}
