<template>
  <Pie
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
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend, CategoryScale, LinearScale} from 'chart.js'

ChartJS.register(ArcElement, Title, Tooltip, Legend, CategoryScale, LinearScale);

export default {
  extends: Pie,
  name: 'PieChart',
  components: { Pie },
  props: {
    chartId: {
      type: String,
      default: 'pie-chart'
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
          'Has Voted',
          'Has not Voted'
        ],
        datasets: [{
          label: 'Dataset',
          data: [26089654, 13957365],
          backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(128, 128, 128)',
          ],
          hoverOffset: 4
        }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
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
