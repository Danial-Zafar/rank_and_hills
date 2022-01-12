<template>
  <div id="map" class="w-full h-full" />
</template>

<script>
import mapboxgl from 'mapbox-gl'
// Singapore [103.808052586332, 1.3516161224392]
// Malaysia [113.265151593398, 2.72055802604466]
// Vietnam [108.339537475899, 14.3154241771087]

export default {

  props: ['selectedCity'],
  // use environment variable later on
  data () {
    return {
      accessToken: 'pk.eyJ1IjoiYWZhdGlyIiwiYSI6ImNreWJtaWg1cjBna2cyeG9mZjNsNGc3ZjQifQ._cgXfiK-9djLaT6iZImvKw',
      map: {},
      city: this.selectedCity
    }
  },
  mounted () {
    this.createMap()
  },
  methods: {
    createMap () {
      // const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
      mapboxgl.accessToken = this.accessToken
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        zoom: 3.25,
        center: [103.808052586332, 1.3516161224392]
      })

      this.addMarker()
    },

    addMarker () {
      const el = document.createElement('div')
      const width = '30'
      const height = '30'
      el.className = 'marker'
      const circle = require('~/assets/img/circle.svg')
      el.style.backgroundImage = `url(${circle})`
      el.style.width = `${width}px`
      el.style.height = `${height}px`
      el.style.backgroundSize = '100%'

      const marker = new mapboxgl.Marker(el)
      marker.setLngLat([103.808052586332, 1.3516161224392]).addTo(this.map)
    }
  }
}
</script>
