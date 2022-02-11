import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  name: 'Header',
  components: {}
})
export default class Header extends Vue {
  menuOpened: boolean = false
}
