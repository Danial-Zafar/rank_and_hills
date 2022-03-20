import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'ProjectsFilter'
})
export default class ProjectsFilter extends Vue {
  @Prop({ default: false }) displayFilter!: boolean
  @Prop({ default: false }) displayOptions!: boolean
}
