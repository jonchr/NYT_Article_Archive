import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "../List";
import SaveBtn from "../SaveBtn";
import DeleteBtn from "../DeleteBtn";

const Results = (props) => (
    <div>
    	<h3>Search Results</h3>
    	{props.results.length ? (
    		<List>
    			{props.results.map((result, i) => (
                    <ListItem key={i}>		
                        <h4>
                            <Link to={result.web_url ? result.web_url : ""} 
                                target="_blank">
                                {/*If there is a print_headline, uses that; else, uses the main headline; else, uses the name*/
                                result.headline.print_headline ? result.headline.print_headline : result.headline.main ? result.headline.main : result.headline.name }
                            </Link>
                            <DeleteBtn onClick={() => props.deleteResult(i)} />
                            <SaveBtn onClick={() => props.saveArticle(i, result)} />
                        </h4>
                        <strong>
                            Published {result.byline ? result.byline.original : false ? result.byline.original.split(" ").map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join(" ") : ""} 
                            {result.pub_date ? " on " + result.pub_date.substring(0,10) : ""}
                        </strong>
                        <p>{result.snippet ? result.snippet : ""}</p>
    				</ListItem>
    			))}
    		</List>
    	) : (
    	<h4>No Results Found</h4> )}
    </div>);

export default Results;
