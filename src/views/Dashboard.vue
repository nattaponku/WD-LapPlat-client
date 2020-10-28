<template>
  <div>
    <base-header type="gradient-egat" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats -->
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          <stats-card
            
            type="gradient-red"
            icon="ni ni-bulb-61"
            class="mb-4 mb-xl-0"
          >
            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Today Power
                </h5>
                <span class="h2 font-weight-bold mb-0">{{ 
                  numberWithCommas(this.PpvTodayTotal.toFixed(2))
                }}</span>
              </div>
            </div>
            <template slot="footer">
              <div v-if="this.PpvDiffTodayTotal > 0">
                <span class="text-success mr-2">
                  <i class="fa fa-arrow-up"></i
                  >{{
                      (
                        (this.PpvDiffTodayTotal / this.PpvYesterdayTotal) *
                        100
                      ).toFixed(2)
                  }}%
                </span>
                <span class="text-nowrap">Since yesterday</span>
              </div>
              <div v-else>
                <span class="text-danger mr-2">
                  <i class="fa fa-arrow-down"></i
                  >{{
                      (
                        (this.PpvDiffTodayTotal / this.PpvYesterdayTotal) *
                        100
                      ).toFixed(2)
                  }}%
                </span>
                <span class="text-nowrap">Since yesterday</span>
              </div>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            
            type="gradient-orange"
            
            icon="ni ni-bulb-61"
            class="mb-4 mb-xl-0"
          >

            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Monthly Power
                </h5>
                <span class="h2 font-weight-bold mb-0">{{ 
                  numberWithCommas((this.PpvMonthTotal).toFixed(2))
                }}</span>
              </div>
            </div>
            <template slot="footer">
              <div v-if="this.PpvDiffMonthTotal > 0">
                <span class="text-success mr-2">
                  <i class="fa fa-arrow-up"></i
                  >{{
                      (
                        (this.PpvDiffMonthTotal / this.PpvLastMonthTotal) *
                        100
                      ).toFixed(2)
                  }}%
                </span>
                <span class="text-nowrap">Since Last Month</span>
              </div>
              <div v-else>
                <span class="text-danger mr-2">
                  <i class="fa fa-arrow-down"></i
                  >{{
                      (
                        (this.PpvDiffMonthTotal / this.PpvLastMonthTotal) *
                        100
                      ).toFixed(2)
                  }}%
                </span>
                <span class="text-nowrap">Since Last Month</span>
              </div>
            </template>


          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            
            type="gradient-green"
            icon="ni ni-money-coins"
            class="mb-4 mb-xl-0"
          >


            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Today Gain
                </h5>
                <span class="h2 font-weight-bold mb-0">{{ 
                  numberWithCommas((this.PpvTodayTotal*this.PpvUnitCost).toFixed(2))
                }}</span>
              </div>
            </div>
            <template slot="footer">
              <div v-if="this.PpvDiffTodayTotal > 0">
                <span class="text-success mr-2">
                  <i class="fa fa-arrow-up"></i
                  >{{
                      (
                        (this.PpvDiffTodayTotal / this.PpvYesterdayTotal) *
                        100
                      ).toFixed(2)
                  }}%
                </span>
                <span class="text-nowrap">Since yesterday</span>
              </div>
              <div v-else>
                <span class="text-danger mr-2">
                  <i class="fa fa-arrow-down"></i
                  >{{
                      (
                        (this.PpvDiffTodayTotal / this.PpvYesterdayTotal) *
                        100
                      ).toFixed(2)
                  }}%
                </span>
                <span class="text-nowrap">Since yesterday</span>
              </div>
            </template>
            



            
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            
            type="gradient-info"
            
            icon="ni ni-money-coins"
            class="mb-4 mb-xl-0"
          >

            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Monthly Gain
                </h5>
                <span class="h2 font-weight-bold mb-0">{{ 
                  numberWithCommas((this.PpvMonthTotal*this.PpvUnitCost).toFixed(2))
                }}</span>
              </div>
            </div>
            <template slot="footer">
              <div v-if="this.PpvDiffMonthTotal > 0">
                <span class="text-success mr-2">
                  <i class="fa fa-arrow-up"></i
                  >{{
                      
                       (
                        (this.PpvDiffMonthTotal / this.PpvLastMonthTotal) *
                        100
                      ).toFixed(2)
                      
                  }}%
                </span>
                <span class="text-nowrap">Since Last Month</span>
              </div>
              <div v-else>
                <span class="text-danger mr-2">
                  <i class="fa fa-arrow-down"></i
                  >{{
                      (this.PpvLastMonthTotal) 
                  }}%
                </span>
                <span class="text-nowrap">Since Last Month</span>
              </div>
            </template>


            
          </stats-card>
        </div>
      </div>
    </base-header>

    <!--Charts-->
    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-7 mb-5 mb-xl-0">
          <card type="default" header-classes="bg-transparent">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h6 class="text-light text-uppercase ls-1 mb-1">
                  Power Generation
                </h6>
                <h5 class="h3 text-white mb-0">Power by time</h5>
              </div>
            </div>
            <line-chart
              :height="350"
              ref="bigChart"
              :chart-data="bigLineChart.chartData"
              :extra-options="bigLineChart.extraOptions"
            ></line-chart>
          </card>
        </div>

        <div class="col-xl-5">
          <card header-classes="bg-transparent">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h6 class="text-uppercase text-muted ls-1 mb-1">
                  Power Generation
                </h6>
                <h5 class="h3 mb-0">Day Generation</h5>
              </div>
              <div class="col">
                <ul class="nav nav-pills justify-content-end">
                  <li class="nav-item mr-2 mr-md-0">
                    <a
                      class="nav-link py-2 px-3"
                      href="#"
                      :class="{ active: bigLineChart.activeIndex === 0 }"
                      @click.prevent="initBigChart(0)"
                    >
                      <span class="d-none d-md-block">Month</span>
                      <span class="d-md-none">M</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link py-2 px-3"
                      href="#"
                      :class="{ active: bigLineChart.activeIndex === 1 }"
                      @click.prevent="initBigChart(1)"
                    >
                      <span class="d-none d-md-block">Year</span>
                      <span class="d-md-none">Y</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <bar-chart
              :height="350"
              ref="barChart"
              :chart-data="redBarChart.chartData"
            ></bar-chart>
          </card>
        </div>
      </div>
      <!-- End charts-->

      <!--Tables-->
      <div class="row mt-5">
        <div class="col-xl-12 mb-5 mb-xl-0">
          <page-visits-table></page-visits-table>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-xl-12">
          <social-traffic-table></social-traffic-table>
        </div>
      </div>
      <!--End tables-->

      <!-- Stat cards -->
      <div class="row">
        <div class="col-xl-4 col-lg-4">
          <stats-card
            title="CO2 Reduction"
            type="gradient-blue"
            sub-title="2,356"
            icon="ni ni-cloud-download-95"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-success mr-2">
                <i class="fa fa-arrow-up"></i> 3.48%
              </span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-4 col-lg-4">
          <stats-card
            title="Reducing Deforestation"
            type="gradient-green"
            sub-title="350,897"
            icon="ni ni-bulb-61"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-success mr-2">
                <i class="fa fa-arrow-up"></i> 12.18%
              </span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-4 col-lg-4">
          <stats-card
            title="Standard Coal Saved"
            type="gradient-red"
            sub-title="924"
            icon="ni ni-basket"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-danger mr-2">
                <i class="fa fa-arrow-down"></i> 5.72%
              </span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
      </div>
      <!-- End stat cards -->
    </div>
  </div>
</template>
<script>
// Charts
import * as chartConfigs from "@/components/Charts/config";
import LineChart from "@/components/Charts/LineChart";
import BarChart from "@/components/Charts/BarChart";
import PVService from "@/services/PVService.js";

// Tables
// import SocialTrafficTable from './Dashboard/SocialTrafficTable';
import PageVisitsTable from "./Dashboard/PageVisitsTable";

import moment from "moment";

function getPVLabelList(dataSet) {
  return dataSet.map((x) => x.substring(x.length - 8, x.length));
}

function getColumn(dataSet, propertyName) {
  return dataSet.map((x) => x[propertyName]);
}


export default {
  components: {
    LineChart,
    BarChart,
    PageVisitsTable,
    // SocialTrafficTable,
  },
  data() {
    return {
      pv: {
        Alias: "",
        Time: "",
        Status: "",
        Vpv1: 0.0,
        Ipv1: 0.0,
        Ppv1: 0.0,
        Vpv2: 0.0,
        Ppv2: 0.0,
        Ppv: 0.0,
        Vac: 0.0,
        Iac: 0.0,
        Fac: 0.0,
        Pac: 0.0,
        PacR: 0.0,
        Temperature: 0.0,
        Eac_today: 0.0,
        Eac_total: 0.0,
        T_total: 0.0,
        IPM_Temperature: 0.0,
        P_BUS_Voltage: 0.0,
        Power_Factor: 0.0,
        Epv1_today: 0.0,
        Epv1_total: 0.0,
        Epv2_total: 0.0,
        Epv_total: 0.0,
      },
      PpvMonthTotal: 0,
      PpvLastMonthTotal: 0,
      PpvDiffMonthTotal: 0,

      PpvTodayTotal: 0,
      PpvYesterdayTotal: 0,
      PpvDiffTodayTotal: 0,

      PpvUnitCost: 5,

      bigLineChart: {
        // allData: [
        //   [0, 10, 30, 15, 40, 20],
        //   [0, 20, 5, 25, 10, 30],
        // ],
        allData: [],
        // allLabels: [
        //   ["6am", "10am", "12am", "2pm", "4pm", "6pm"],
        //   ["2559", "2560", "2561", "2562", "2563"],
        // ],
        allLabels: [],
        activeIndex: 0,
        chartData: {
          datasets: [],
          labels: [],
        },
        extraOptions: chartConfigs.blueChartOptions,
      },
      redBarChart: {
        allData: [
          [0, 0, 10, 30, 15, 40, 20, 30, 40, 35, 0, 0],
          [5, 25, 10, 30, 15],
        ],
        allLabels: [
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          ["2559", "2560", "2561", "2562", "2563"],
        ],
        activeIndex: 0,
        chartData: {
          datasets: [],
          labels: [],
        },
      },
    };
  },
  methods: {
    numberWithCommas(x) {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      console.log(parts[0])
      return parts.join(".");
    },
    initBigChart(index) {
      let redBarChartData = {
        datasets: [
          {
            label: "Solar",
            data: this.redBarChart.allData[index],
          },
        ],
        labels: this.redBarChart.allLabels[index],
      };
      this.redBarChart.chartData = redBarChartData;
      this.redBarChart.activeIndex = index;

      let bigLineChartData = {
        datasets: [
          {
            label: "Solar",
            data: this.bigLineChart.allData,
          },
        ],
        labels: this.bigLineChart.allLabels,
      };

      this.bigLineChart.chartData = bigLineChartData;
      this.bigLineChart.activeIndex = index;

      console.log(
        "Output " + this.PpvTodayTotal + " " + this.PpvDiffTodayTotal
      );
    },
    initTotalCards() {
      console.log(
        "initTotalCards",
        this.PpvMonthTotal,
        this.PpvDiffMonthTotal,
        this.PpvTodayTotal,
        this.PpvDiffTodayTotal,
        this.PpvUnitCost
      );
    },
  },
  async created() {
    try {
      console.log("created");
    } catch (error) {
      console.log(error);
    }
  },
  async mounted() {
    //let date = getToday();
    // for testing
    // let date = "2020-10-21";
    // this.pv = (await PVService.show(date)).data;
    // this.bigLineChart.allData = getColumn(this.pv, "Ppv");
    // this.bigLineChart.allLabels = getColumn(this.pv, "Time");
    // this.bigLineChart.allLabels = getIndexList(this.bigLineChart.allLabels);

    var date = moment("2020-10-20", "YYYY-MM-DD", true);
    var month = String(date.get("month", "MM") + 1);

    var yesterday = date.clone().subtract("1", "day");
    var lastMonth = String(
      date.clone().subtract("1", "month").get("month", "MM") + 1
    );

    var strDate = date.format("YYYY-MM-DD");
    var strYesterday = yesterday.format("YYYY-MM-DD");
    var strMonth = month;
    var strLastMonth = lastMonth;

    console.log("strDate =" + strDate);
    console.log("strMonth =" + strMonth);
    console.log("strYesterday =" + strYesterday);
    console.log("strLastMonth =" + strLastMonth);
    this.pv = (await PVService.showByDate(strDate)).data;

    // get pv by date for bigLineChart
    this.bigLineChart.allData = getColumn(this.pv, "Ppv");
    this.bigLineChart.allLabels = getPVLabelList(getColumn(this.pv, "Time"));
    console.log(this.bigLineChart.allData);
    console.log(this.bigLineChart.allLabels);

    //get pv data for cards that represent daily Ppv total number
    this.PpvTodayTotal = (await PVService.showTotalByDate(strDate)).data;
    this.PpvYesterdayTotal = (
      await PVService.showTotalByDate(strYesterday)
    ).data;
    this.PpvDiffTodayTotal = this.PpvYesterdayTotal - this.PpvTodayTotal;

    // get pv data for cards that represent  monthly Ppv total number
    this.PpvMonthTotal = (await PVService.showTotalByMonth(strMonth)).data;
    this.PpvLastMonthTotal = (
      await PVService.showTotalByMonth(strLastMonth)
    ).data;
    this.PpvDiffMonthTotal = this.PpvLastMonthTotal - this.PpvMonthTotal;

    // get all pv data for cards that represent total number
    //this.pv = (await PVService.index()).data;
    await this.initBigChart(0);
    await this.initTotalCards();
    console.log("mounted");
  },
};
</script>
<style></style>
