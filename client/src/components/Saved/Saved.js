import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "../List";
import DeleteBtn from "../DeleteBtn";

const Saved = (props) => (
	<div>
		<h3>Saved Articles</h3>
		{props.articles.length ? (
			<List>
    			{props.articles.map(article => (
    				<ListItem key={article._id}>
            			<h4>
                            <Link to={article.url} 
                                target="_blank">
                                {article.title}
                            </Link>
                			<DeleteBtn onClick={() => props.deleteArticle(article._id)} />
                        </h4>
                        <strong>Published {article.author ? "by " + article.author : ""} on {article.date.substring(0,10)}</strong>
                        <p>{article.snippet}</p>
    				</ListItem>
    			))}
			</List>
		) : (
		<h4>No Saved Articles to Display</h4> )}
	</div>);

export default Saved;
