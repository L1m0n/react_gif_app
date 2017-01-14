import React, {Component} from 'react';

class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.enableButton = this.enableButton.bind(this)
		this.state = {
			disabled:true
		}
	}

	enableButton(value){
		if (value !== ""){
			this.setState({
				disabled:false
			})
		}
		else {
			this.setState({
				disabled:true
			})
		}
	}

	render(){
		let input
		return (
			<div className="search-form">
				<form onSubmit={(evt) => {
					evt.preventDefault()
					this.props.onSubmit(0, this.props.category, input.value, )
					input.value = ""
				}}>
					<input 
						onChange={(e)=> this.enableButton(e.target.value)}
						placeholder="What are you looking for?" 
						ref={node => input = node}
						className="search-form__input"
						type="text" 
					/>
					<button 
						disabled={this.state.disabled}
						className="search-form__button"
						type="submit"
					>
						Find it!
					</button>
				</form>
			</div>
		)
	}
}

export default SearchForm