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
		getPictures(this.props.newPictures, this.refs.searchEntry.getDOMNode().value.trim());	
	},


	render: function(){
		return <form>
					<button onClick={this.handleClick} >searchbar</button>
					<input type="text" placeholder="search..." ref="searchEntry"></input>
				</form>
	}
});

var App = React.createClass({

	newPictures: function(newPictures) {
		this.replaceProps({picArray: []});
		this.replaceProps({picArray: newPictures});
	},

	render: function() {
		return(	<div>
					<SearchBar newPictures={this.newPictures}/>
					<PicBoard picArray={this.props.picArray} />
				</div>

		);
	}
});

React.renderComponent(<App picArray={["http://goo.gl/V2VNd7"]} />, document.getElementById("reactContainer"));







