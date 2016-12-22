var updateSentence = function (sentence) {
  return $("#sentence").html(sentence);
}

$.ajax({
    url: "sentence",
    method: 'GET',
    success: function (todaySentence) {
        updateSentence(todaySentence);
    },
    error: function (error) {
        updateSentence("Error loading today's sentence: " + JSON.stringify(error));
    }
});
