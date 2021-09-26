import React, { Component } from 'react'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const res = await fetch(url);
        const postsData = await res.json();
        this.setState({ posts: postsData })
    }
    
    render() {
        const { posts } = this.state;
        
        return (
            <>
                <h1>List of Posts</h1>
                {posts && posts.length && posts.map(it => <div key={it.id}>{it.title}</div>)}
            </>
        )
    }
}

export default PostList
