import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Search from "../../components/Search";
import Saved from "../../components/Saved";
import Results from "../../components/Results";

class Main extends Component {
	state = {
		articles: [],
		results: [],
		topic: "",
		startyear: "",
		endyear: ""
	};

	//Loads articles after mounting
	componentDidMount() {
		this.loadArticles();
	}

	//Loads articles from Mongoose database and stores in state
	loadArticles() {
		API.getArticles()
			.then(res => this.setState({ articles: res.data }))
			.catch(err => console.log(err));
	}

	//Loads results from API call and stores in state
	loadResults() {
		API.searchNYT(this.state.topic, this.state.startyear, this.state.endyear)
			.then(res => {
				this.setState({
					results: res.data.response.docs,
					topic: "",
					startyear: "",
					endyear: ""
				});
				if (!res.data.response.docs.length) alert("No articles found.");
			})
        	.catch(err => console.log(err));
    	
    }

    //Deletes the index number result from results store
    deleteResult = index => {
    	let results = this.state.results;
    	results.splice(index, 1);
    	this.setState({ results });
    };

    //Clears results from state
	clearResults = () => {
		this.setState({ results: [] });
	};

	//Formats and saves the article from results in Mongoose database
	saveArticle = (index, result) => {
		//Removes item from the results list
		this.deleteResult(index);

		let author = result.byline.original;
		//If author begins with "By ", removes it from author
		if (author.startsWith("By ")) author = author.substr(3);
		//Converts name to proper case
		author = author.split(" ").map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join(" ");
		
		// If there is a print_headline, uses that; else, uses the main headline; else, uses the name
		const title = result.headline.print_headline ? result.headline.print_headline : result.headline.main ? result.headline.main : result.headline.name;

		//Compiles the data in a new object
		const article = {
			title,
			author,
			date: result.pub_date,
			snippet: result.snippet,
			url: result.web_url
		};

		//Saves article to Mongoose database
		API.saveArticle(article)
			.then(res => this.loadArticles())
			.catch(err => console.log(err));
		
		setTimeout(() => alert("Article saved."), 50);
	};

	//Deletes article from Mongoose database
	deleteArticle = id => {
		API.deleteArticle(id)
	      .then(res => this.loadArticles())
	      .catch(err => console.log(err));
	};

	//Updates name key's value in state
	handleInputChange = event => {
	    const { name, value } = event.target;
	    this.setState({
	      [name]: value
	    });
	};

	//Loads results upon form submit
	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.topic) {
			this.loadResults();
        }
	};

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-12">
						<Search 
							state={this.state} 
							clearResults={this.clearResults} 
							handleInputChange={this.handleInputChange} 
							handleFormSubmit={this.handleFormSubmit}/>
					</Col>
				</Row>
				{ this.state.results.length ? (
				<Row>
					<Col size="md-12">
						<Results 
							results={this.state.results} 
							deleteResult={this.deleteResult} 
							saveArticle={this.saveArticle}/>
					</Col>
				</Row>
				) : null}
				<Row>
					<Col size="md-12">
						<Saved 
							articles={this.state.articles} 
							deleteArticle={this.deleteArticle}/>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Main;