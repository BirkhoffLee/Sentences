var app;

$.ajax({
    url: "https://raw.githubusercontent.com/BirkhoffLee/Sentences/sentences/sentence",
    method: 'GET',
    success: function (todaySentence) {
        app = new Vue({
          el: '#sentence',
          data: {
            sentence: todaySentence
          }
        });
    },
    error: function (error) {
        alert(JSON.stringify(error));
        self.sentence = "Error loading today's sentence.";
    }
});
