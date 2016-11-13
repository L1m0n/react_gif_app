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
						placeholder="Type something..." 
						onChange={(e)=> this.enableButton(e.target.value)}
						ref={node => input = node}
						type="text" 
					/>
					<button 
						disabled={this.state.disabled}
						type="submit"
					>
						find
					</button>
				</form>
			</div>
		)
	}
}

/*
const SearchForm = ({ onSubmit, category }) => {
	let input
	return (
		<div className="search-form">
			<form onSubmit={(evt) => {
				evt.preventDefault()
				onSubmit(0, category, input.value, )
				input.value = ""
			}}>
				<input 
					placeholder="Type something..." 
					ref={node => input = node}
					type="text" 
				/>
				<button 
					type="submit"
					disabled={btnDisabled} 
				>
					find
				</button>
			</form>
		</div>
	)
}
*/
export default SearchForm