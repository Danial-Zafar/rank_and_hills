import { Vue, Component } from 'nuxt-property-decorator'

import Header from '@/components/Header/header.vue'
import Footer from '@/components/Footer/footer.vue'
import Projects from '@/components/ProjectsPage/projects.vue'

@Component({
  components: {
    Header,
    Projects,
    Footer
  }
})
export default class OfficesComponent extends Vue {}
