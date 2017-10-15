import axios from "axios";

export default {
  // Gets all saved articles
  getArticles: function() {
    return axios.get("/api/saved");
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/saved/" + id);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/saved", articleData);
  },

  searchNYT: function(topic, startyear, endyear) {
    const apiKey = "88c9c75cbe3041429fd40ce162908059";
    let searchURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${topic}`;

    if (startyear) searchURL += `&begin_date=${startyear}0101`;
    if (endyear) searchURL += `&end_date=${endyear}1231`;    
    
    return axios.get(searchURL);
  }
};
