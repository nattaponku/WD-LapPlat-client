import Api from '@/services/Api'
export default {
    index() {
        return Api().get('PVS')
    },
    showByDate(date) {
        return Api().get('PVDATE/' + date)
    },
    showTotalByDate(date) {
        return Api().get('PVTOTALDATE/' + date)
    },
    showTotalByMonth(month) {
        return Api().get('PVTOTALMONTH/' + month)
    },
    post(PV) {
        return Api().post('PV', PV)
    }
}