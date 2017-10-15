import React from "react";
import "./SaveBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SaveBtn = props => (
	<span className="save-btn glyphicon glyphicon-floppy-disk" {...props}></span>
);
/*	<span className="save-btn" {...props}>
		&#128190;
	</span>
);*/

export default SaveBtn;
