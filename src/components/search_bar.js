import React, { Component } from 'react';

 class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
      }

    render() {
        return (
            <div className= "search-bar">
                <input 
                value = {this.state.term}
                onChange = {event => this.onInputChange(event.target.value)} 
                />
            </div>
            
        );
    }
        // Value of the input: {this.state.term} // this is written under input on change to show the state written on the DOM
        //>console.log(event.target.value)} />; //{this.onInputChange
        onInputChange(term) {
            this.setState({term});
            this.props.onSearchTermChange(term);
        }
    }
 export default SearchBar;
//const SearchBar = () => {
    //return <input />
//}
