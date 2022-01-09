import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'SectionHeader'
})
export default class SectionHeader extends Vue {
  @Prop({ default: null }) title!: string
  @Prop({ default: null }) url!: string
  @Prop({ default: false }) displayLink!: boolean
}
