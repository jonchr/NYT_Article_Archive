var axios = require("axios");


function search () {
	return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=88c9c75cbe3041429fd40ce162908059&q=apple");
}

console.log(search());
