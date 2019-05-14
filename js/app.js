new Vue({
  el: '#movoiapp',
  data: {
    logotype: '[m]',
    showModal: false,
    movie_name: '',
    statusText: '',
    remoteSearchJSONData: [],
    popupData:[]
  },
  methods: {
    movie_search: function () {

      // OMDB API'si
      var omdbAPIKey = '22c640b6';

      // OMDb API URL'si
      var omdbURL = 'https://www.omdbapi.com/?s=' + this.movie_name + '&apikey=' + omdbAPIKey;

      // Vue self
      var self = this;

      // axios.js ile veri çekelim
      axios.get(omdbURL)
        .then(function (response) {
          // Gelen veri içindeki Search kısmındaki objeleri Vue'nin değerine atayalım.
          self.remoteSearchJSONData = [];
          self.remoteSearchJSONData = response.data.Search;
        })
        .catch(function (error) {
          self.statusText = "Bir hata oluştu. " + error
        });
    },
    get_movie_detail: function (imdbID) {
      // OMDB API'si
      var omdbAPIKey = 'cfcb4f93';

      // OMDb API URL'si
      var omdbURL = 'https://www.omdbapi.com/?i=' + imdbID + '&apikey=' + omdbAPIKey;

      // Vue self
      var self = this;

      // axios.js ile veri çekelim
      axios.get(omdbURL)
        .then(function (response) {
          // Gelen veri içindeki Search kısmındaki objeleri Vue'nin değerine atayalım.

          self.popupData = [];
          self.popupData = response.data;

          self.showModal = true;
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
