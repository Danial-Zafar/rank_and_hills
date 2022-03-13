import { Vue, Component } from 'nuxt-property-decorator';

import Header from '@/components/Header/header.vue';
import Footer from '@/components/Footer/footer.vue'
import Offices from '@/components/Offices/offices.vue'

@Component({
  components: {
    Header,
    Offices,
    Footer
  }
})
export default class OfficesComponent extends Vue {}
