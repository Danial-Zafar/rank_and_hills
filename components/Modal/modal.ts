import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'Modal'
})
export default class Modal extends Vue {
  displayFilterModal = false
  @Prop({ default: null }) showing!: any
}
