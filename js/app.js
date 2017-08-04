
new Vue({
  el: '#movoiapp',
  data: {
    logotype: '[m]',
    showModal: false,
    movie_name: '',
    statusText: '',
    remoteSearchJSONData: []
  },
  methods: {
    movie_search: function () {

      // OMDB API'si
      var omdbAPIKey = 'cfcb4f93';

      // OMDb API URL'si
      var omdbURL = 'https://www.omdbapi.com/?s=' + this.movie_name + '&apikey=' + omdbAPIKey;

      // axios.js ile veri çekelim

      // Vue'nin kendisini unutmayalım
      var self = this;

      axios.get(omdbURL)
        .then(function (response) {
          // Gelen veri içindeki Search kısmındaki objeleri Vue'nin değerine atayalım.
          self.remoteSearchJSONData = [];
          self.remoteSearchJSONData = response.data.Search;
        })
        .catch(function (error) {
          self.statusText = "Bir hata oluştu. " + error
        });
    }
  }

})

Vue.component('modal', {
  template: '#modal-template'
})