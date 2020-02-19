import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: "#app",
    data: {
      rates: null,
      amount: 0,
      amount2: 0,
      // ccy: null,
      selectedCurrency: null,
      selectedCurrency2: null
    },
    mounted(){
      this.fetchFX()
    },
    computed: {
      converted: function (){
        return ((this.amount * this.rates[this.selectedCurrency]).toFixed(2));
      },
      converted2: function (){
        return ((this.amount2 / this.rates[this.selectedCurrency2]).toFixed(2));
      }
    },
    methods: {
      fetchFX: function (){
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.rates = data.rates)
      }
    //   ,
    //   getRate: function(selectedCurrency) {
    //     for (var ccy of hash) {
    //       if (selectedCurrency == this.rates.key) {
    //         this.ccy = this.rates.value;
    //       }
    //     }
    // }
}
})
});
