<template>
  <Bar
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
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  extends: Bar,
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
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
          'Kupata',
          'Roro',
          'Tonio',
          'Franco',
          'Benji',
          'Hermanno'
        ],
        datasets: [{
          label: 'Dataset',
          data: [65, 59, 80, 81, 56, 55],
          backgroundColor: [
            'rgba(255, 099, 132, 0.2)',
            'rgba(255, 159, 064, 0.2)',
            'rgba(255, 205, 086, 0.2)',
            'rgba(075, 192, 192, 0.2)',
            'rgba(054, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)'
          ],
          borderWidth: 1
        }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
    }
  }
    /* // old do not use, do not delete either still useful
    extends: Pie,
    props: {
      label: {
        type: String
      },
      chartData: {
        type: Array
      },
      options: {
        type: Object
      }
    },
    mounted() {
      const voted = this.chartData.map(d => d.voted);
      const notVoted = this.chartData.map(d => d.notVoted);

      this.renderChart(
        {
          labels: [
            'Has Voted',
            'Has not Voted'
          ],
          datasets: [{
            label: this.label,
            data: [voted, notVoted],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ]
          }]
        },
        this.options
      );
    }
    */
  };
</script>
