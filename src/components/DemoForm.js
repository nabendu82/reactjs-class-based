import React, { Component } from 'react'

class DemoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            comment: '',
            language: 'react'
        }
    }

    handleUserChange = (event) => {
        this.setState({ username: event.target.value })
    }

    handleCommentChange = (event) => {
        this.setState({ comment: event.target.value })
    }

    handleLanguageChange = (event) => {
        this.setState({ language: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.username + ' ' + this.state.comment + ' ' + this.state.language)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username : </label>
                    <input type="text" id="username" value={this.state.username} onChange={this.handleUserChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comments : </label>
                    <textarea id="comment" value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                </div>
                <br />
                <div>
                    <label htmlFor="language">Language</label>
                    <select id="language" value={this.state.language} onChange={this.handleLanguageChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="reactnative">React Native</option>
                        <option value="python">Python</option>
                    </select>
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default DemoForm
