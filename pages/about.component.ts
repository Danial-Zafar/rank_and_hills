import { Vue, Component } from 'nuxt-property-decorator';

import Header from '@/components/Header/header.vue';
import Footer from '@/components/Footer/footer.vue'
import About from '@/components/AboutPage/about.vue'

@Component({
  components: {
    Header,
    About,
    Footer
  }
})
export default class OfficesComponent extends Vue {}
