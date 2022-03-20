import { Vue, Component } from 'nuxt-property-decorator'

import SectionHeader from '../SectionHeader/section-header'

@Component({
  name: 'Projects',
  components: {
    SectionHeader
  }
})
export default class Projects extends Vue {
  url: string = 'https://api.rankine-hill.com/project/'
  projects: any = null
  filteredProjects: any = null
  filterOptions: any = null
  filterCountry: string = 'All'
  filterType: string | null = null
  filterService: string | null = null
  filterBy: string = 'country'

  mounted () {
    this.getFilterOptions()
    this.getProjects()
  }

  async getFilterOptions () {
    try {
      this.filterOptions = (await this.$axios.get('https://api.rankine-hill.com/filter/')).data.result
      /* console.log('filterOptions', this.filterOptions) */
    } catch (err) {
      console.error(err)
    }
  }

  async getProjects () {
    try {
      this.projects = (await this.$axios.get(this.url)).data.result
      this.filteredProjects = Object.assign([], this.projects)
      /* console.log('projects', this.projects) */
    } catch (err) {
      console.log(err)
    }
  }

  filter (key: string, value: string) {
    switch (key) {
      case 'filterCountry':
        this.filterCountry = value
        if (value === 'All') {
          this.filteredProjects = this.projects
          return
        }
        break
      case 'filterType':
        this.filterType = value
        break
      case 'filterService':
        this.filterService = value
        break
      default:
        break
    }
    this.filterProjects()
  }

  updateQueryParameter (uri: string, key: string, value: string | null) {
    const re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i')
    const separator = uri.includes('?') ? '&' : '?'
    if (uri.match(re)) {
      return uri.replace(re, '$1' + key + '=' + value + '$2')
    } else {
      return uri + separator + key + '=' + value
    }
  }

  async filterProjects () {
    let url = this.url

    if (this.filterBy === 'type') {
      url = this.updateQueryParameter(url, this.filterBy, this.filterType)
    }
    if (this.filterBy === 'service') {
      url = this.updateQueryParameter(url, this.filterBy, this.filterService)
    }
    if (this.filterBy === 'country') {
      url = this.updateQueryParameter(url, this.filterBy, this.filterCountry)
    }

    try {
      this.filteredProjects = (await this.$axios.get(`${url}`)).data.result
    } catch (err) {
      console.log(err)
    }
  }

  updatedFilterBy (filterBy: string) {
    this.filterBy = filterBy
  }
}
