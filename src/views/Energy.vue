<template>
  <div>
    <base-header type="gradient-egat" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats -->
      
    </base-header>

    <!--Charts-->
    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-12 mb-5 mb-xl-0">
          <card type="default" header-classes="bg-transparent">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h6 class="text-light text-uppercase ls-1 mb-1">Power Generation</h6>
                <h5 class="h3 text-white mb-0">Power by time</h5>
              </div>
              
            </div>
            <line-chart
              :height="350"
              ref="bigChart"
              :chart-data="bigLineChart.chartData"
              :extra-options="bigLineChart.extraOptions"
            ></line-chart>
            <div class="col">
                                <ul class="nav nav-pills justify-content-end">
                                    <li class="nav-item mr-2 mr-md-0">
                                        <a class="nav-link py-2 px-3"
                                           href="#"
                                           :class="{active: bigLineChart.activeIndex === 0}"
                                           @click.prevent="initBigChart(0)">
                                            <span class="d-none d-md-block">Month</span>
                                            <span class="d-md-none">M</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link py-2 px-3"
                                           href="#"
                                           :class="{active: bigLineChart.activeIndex === 1}"
                                           @click.prevent="initBigChart(1)">
                                            <span class="d-none d-md-block">Week</span>
                                            <span class="d-md-none">W</span>
                                        </a>
                                    </li>
                                </ul>
              </div>
          </card>
        </div>
      </div>
      <!-- End charts-->

      <!--Tables-->
      <!-- <div class="row mt-5">
        <div class="col-xl-12 mb-5 mb-xl-0">
          <page-visits-table></page-visits-table>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-xl-12">
          <social-traffic-table></social-traffic-table>
        </div>
      </div> -->
      <!--End tables-->
    </div>
  </div>
</template>
<script>
// Charts
import * as chartConfigs from "@/components/Charts/config";
import LineChart from "@/components/Charts/LineChart";
// import BarChart from "@/components/Charts/BarChart";

// Tables
// import SocialTrafficTable from './Dashboard/SocialTrafficTable';
// import PageVisitsTable from "./Dashboard/PageVisitsTable";

export default {
  components: {
    LineChart,
    // BarChart,
    // PageVisitsTable,
    // SocialTrafficTable,
  },
  data() {
    return {
      bigLineChart: {
        allData: [
          [0, 10, 30, 15, 40, 20],
          [0, 20, 5, 25, 10, 30],
        ],
        allLabels: [
          ["6am", "10am", "12am", "2pm", "4pm", "6pm"],
          ["2559", "2560", "2561", "2562", "2563"],
        ],
        activeIndex: 0,
        chartData: {
          datasets: [],
          labels: [],
        },
        extraOptions: chartConfigs.redChartOptions,
      },
      // redBarChart: {
      //   allData: [
      //     [0, 0, 10, 30, 15, 40, 20, 0, 0, 0, 0, 0],
      //     [5, 25, 10, 30, 15],
      //   ],
      //   allLabels: [
      //     [
      //       "Jan",
      //       "Feb",
      //       "Mar",
      //       "Apr",
      //       "May",
      //       "Jun",
      //       "Jul",
      //       "Aug",
      //       "Sep",
      //       "Oct",
      //       "Nov",
      //       "Dec",
      //     ],
      //     ["2559", "2560", "2561", "2562", "2563"],
      //   ],
      //   activeIndex: 0,
      //   chartData: {
      //     datasets: [],
      //     labels: [],
      //   },
      // },
    };
  },
  methods: {
    // initBigChart(index) {
    initBigChart() {
      // let redBarChartData = {
      //   datasets: [
      //     {
      //       label: "Solar",
      //       data: this.redBarChart.allData[index],
      //     },
      //   ],
      //   labels: this.redBarChart.allLabels[index],
      // };
      // this.redBarChart.chartData = redBarChartData;
      // this.redBarChart.activeIndex = index;

      let bigLineChartData = {
        datasets: [
          {
            lable: "Solar",
            data: this.bigLineChart.allData[0],
            
          },{
            lable: "Solar",
            data: this.bigLineChart.allData[1],
            borderColor:"red",
          },
        ],
        labels: this.bigLineChart.allLabels[0],
      };
      this.bigLineChart.chartData = bigLineChartData;
    },
  },
  mounted() {
    this.initBigChart(0);
  },
};
</script>
<style></style>
