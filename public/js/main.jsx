/** @jsx React.DOM */

var Pic = React.createClass({
	render: function() {
		return(<img className={"pic"} src={this.props.source}/>);
	}
});

var PicBoard = React.createClass({
	render: function() {
		var pictures = [];
		for (i=0;i<this.props.picArray.length;i+=1){
			pictures.push(<Pic source={this.props.picArray[i]}/>);
		}
		return(<div>{pictures}</div>);
	}
});

var SearchBar = React.createClass({

	handleClick: function(event){
		event.preventDefault();
		var searchEntry = this.refs.searchEntry.getDOMNode().value.trim();
		getPictures(this.props.newPictures, searchEntry);	
	},


	render: function(){
		return <form>
					<button onClick={this.handleClick} >searchbar</button>
					<input type="text" placeholder="search..." ref="searchEntry"></input>
				</form>
	}
});

var App = React.createClass({

	newPictures: function() {
		this.replaceProps({picArray: []});
		this.replaceProps({picArray: pictures});
	},

	render: function() {
		return(	<div>
					<SearchBar newPictures={this.newPictures}/>
					<PicBoard picArray={this.props.picArray} />
				</div>

		);
	}
});

var initialPics = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mr7XPzj2zAW9CscYtQz044YHrUu_g6BrFL26gyxX-2mG1rt1"]

React.renderComponent(<App picArray={initialPics} />, document.getElementById("reactContainer"));

getPictures(function(){return}, "fire");





