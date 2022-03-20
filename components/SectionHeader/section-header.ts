import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'SectionHeader'
})
export default class SectionHeader extends Vue {
  displayFilterModal = false
  @Prop({ default: null }) title!: string
  @Prop({ default: null }) url!: string
  @Prop({ default: null }) subTitle!: string
  @Prop({ default: false }) displayLink!: boolean
  @Prop({ default: false }) displayFilter!: boolean

  @Prop({ default: 'country' }) filterBy!: string
  @Prop({ default: null }) filterOptions!: any
  @Prop({ default: 'All' }) filterCountry!: string
  @Prop({ default: null }) filterType!: string
  @Prop({ default: null }) filterService!: string
}
