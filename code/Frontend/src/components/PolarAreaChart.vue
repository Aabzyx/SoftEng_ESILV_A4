<template>
  <PolarArea
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
  />
</template>

<script>
import { PolarArea } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'PolarAreaChart',
  components: { PolarArea },
  props: {
    chartId: {
      type: String,
      default: 'polar-area-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chartData: {
        labels: [
          ''
        ],
        datasets: [
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
    }
  },
  methods:{
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    },
    getData(){
      /*
      for(let i = 0; i < this.$store.state.actualElection.resultats.length; i++){
        let match = [this.getRandomInt(256), this.getRandomInt(256), this.getRandomInt(256), 0.2];
        this.chartData.datasets.push(
            {label: this.$store.state.actualElection.choix[i].value,
              data: [this.$store.state.actualElection.resultats[i]],
              image: this.$store.state.actualElection.choix[i].img,
              backgroundColor: 'rgba(' + [match[0],match[1],match[2],match[3]].join(',') + ')',
              borderColor: 'rgb(' + [match[0],match[1],match[2]].join(',') + ')',
              borderWidth: 1
            })
      }
      this.chartData.datasets.sort(function (a, b){
        return b.data[0] - a.data[0]
      });
      this.$store.state.actualResult = this.chartData.datasets;
      */
    }
  },
  mounted() {
    this.$nextTick(this.getData)
  }
}
</script>
