import React, { Component } from "react";
import { Input, FormBtn } from "../Form";

class Search extends Component {
    render() {

        return <form>
            <h3>Search</h3>
            <h4>Topic</h4>
            <Input
                value={this.props.state.topic}
                onChange={this.props.handleInputChange}
                name="topic"
                placeholder="Topic (required)"
            />
            <h4>Start Year</h4>
            <Input
                value={this.props.state.startyear}
                onChange={this.props.handleInputChange}
                name="startyear"
                placeholder="Start Year (optional)"
            />
            <h4>End Year</h4>
            <Input
                value={this.props.state.endyear}
                onChange={this.props.handleInputChange}
                name="endyear"
                placeholder="End Year (optional)"
            />
            <FormBtn
                className={"btn btn-danger" + (this.props.state.results.length ? "" : " hidden")}
                disabled={!this.props.state.results.length}
                onClick={this.props.clearResults}
            >
            Clear Results
            </FormBtn>
            <FormBtn
                className="btn btn-success"
                disabled={!(this.props.state.topic)}
                onClick={this.props.handleFormSubmit}
            >
            Search
            </FormBtn>
        </form>
    }
}

export default Search;
