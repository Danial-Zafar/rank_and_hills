import { Vue, Component } from 'nuxt-property-decorator';

import Header from '@/components/Header/header.vue';
import CTA from '@/components/CTA/cta.vue'
import Projects from '~/components/Projects/projects.vue';
import About from '@/components/About/about.vue';
import ExperienceBeyond from '@/components/ExperienceBeyond/experience-beyond.vue'
import Contact from '@/components/Contact/contact.vue'
import MapContainer from '@/components/MapContainer/map-container.vue'
import Footer from '@/components/Footer/footer.vue'

@Component({
  components: {
    Header,
    CTA,
    Projects,
    About,
    ExperienceBeyond,
    Contact,
    MapContainer,
    Footer
  }
})
export default class IndexComponent extends Vue {}
