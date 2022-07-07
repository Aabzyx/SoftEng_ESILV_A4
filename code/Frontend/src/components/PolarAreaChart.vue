<template>

  <div class="container">
    <div class="col mt-5">
      <div class="row mt-5">
        <h2> Country </h2>
        <PolarArea
            :chart-options="chartOptions"
            :chart-data="chartDataCountry"
            :chart-id="chartId"
            :dataset-id-key="datasetIdKey"
            :plugins="plugins"
            :css-classes="cssClasses"
            :styles="styles"
            :width="width"
            :height="height"
        />
      </div>
      <div class="row mt-5">
        <h2> Region </h2>
        <PolarArea
            :chart-options="chartOptions"
            :chart-data="chartDataRegion"
            :chart-id="chartId"
            :dataset-id-key="datasetIdKey"
            :plugins="plugins"
            :css-classes="cssClasses"
            :styles="styles"
            :width="width"
            :height="height"
        />
      </div>
      <div class="row mt-5">
        <h2> Department </h2>
        <PolarArea
            :chart-options="chartOptions"
            :chart-data="chartDataDepartement"
            :chart-id="chartId"
            :dataset-id-key="datasetIdKey"
            :plugins="plugins"
            :css-classes="cssClasses"
            :styles="styles"
            :width="width"
            :height="height"
        />
      </div>
    </div>
  </div>

</template>

<script>
import { PolarArea } from 'vue-chartjs'
import * as ChartJS from 'chart.js'
import http from "../http-common";

ChartJS.Chart.register.apply(null, Object.values(ChartJS).filter((chartClass) => (chartClass.id)));

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
      chartDataCountry: {
        labels: [
          ''
        ],
        datasets: [
        ]
      },
      chartDataRegion: {
        labels: [
          ''
        ],
        datasets: [
        ]
      },
      chartDataDepartement: {
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
      let countryArr = [];
      let RegionyArr = [];
      let DepartementArr = [];
      http
          .get("user/getAllUser")
          .then((users => {
            const test = users.data.filter(u => this.idElect(u.autorisedElections).includes(this.$store.state.actualElection._id))
                test.forEach(u => {
                  countryArr.push({category: u.local[0]})
                  RegionyArr.push({category: u.local[1]})
                  DepartementArr.push({category: u.local[2]})
                })
            countryArr = this.indexFct(countryArr);
            RegionyArr = this.indexFct(RegionyArr);
            DepartementArr = this.indexFct(DepartementArr);

            for(const obj in countryArr){
              let match = [this.getRandomInt(256), this.getRandomInt(256), this.getRandomInt(256), 0.2];
              this.chartDataCountry.datasets.push(
                  {label: obj,
                    data: [countryArr[obj].length],
                    backgroundColor: 'rgba(' + [match[0],match[1],match[2],match[3]].join(',') + ')',
                    borderColor: 'rgb(' + [match[0],match[1],match[2]].join(',') + ')',
                    borderWidth: 1
                  })
            }

            for(const obj in RegionyArr){
              let match = [this.getRandomInt(256), this.getRandomInt(256), this.getRandomInt(256), 0.2];
              this.chartDataRegion.datasets.push(
                  {label: obj,
                    data: [RegionyArr[obj].length],
                    backgroundColor: 'rgba(' + [match[0],match[1],match[2],match[3]].join(',') + ')',
                    borderColor: 'rgb(' + [match[0],match[1],match[2]].join(',') + ')',
                    borderWidth: 1
                  })
            }

            for(const obj in DepartementArr){
              let match = [this.getRandomInt(256), this.getRandomInt(256), this.getRandomInt(256), 0.2];
              this.chartDataDepartement.datasets.push(
                  {label: obj,
                    data: [DepartementArr[obj].length],
                    backgroundColor: 'rgba(' + [match[0],match[1],match[2],match[3]].join(',') + ')',
                    borderColor: 'rgb(' + [match[0],match[1],match[2]].join(',') + ')',
                    borderWidth: 1
                  })
            }

            console.log(this.chartDataCountry, this.chartDataRegion, this.chartDataDepartement)
          }))
    },
    idElect(arrObj){
      let test = []
      arrObj.forEach(o => test.push(o.election))
      return test
    },
    indexFct(arr){
      const test = arr.reduce((group, product) => {
        const { category } = product;
        group[category] = group[category] ?? [];
        group[category].push(product);
        return group;
      }, {});
    return test}
  },
  mounted() {
    this.$nextTick(this.getData)
  }
}
</script>

<style scoped>
.row {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  margin: 50px auto;
}

.col {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  margin: 50px auto;
}
</style>
