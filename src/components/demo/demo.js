import React from 'react';

export default class demo extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>{this.props.children}</div>
		);
	}
}