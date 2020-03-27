import React, { Component } from "react";
import Post from "../../../components/Post/Post";
import axios from "axios";
import styles from "./Post.module.css";

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: 0,
    };

    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const posts = response.data.slice(0, 150);
                const updatedPost = posts.map(post => {
                    return { ...post, author: "Manish" };
                });
                this.setState({ posts: updatedPost });
            });
    }

    postClicked = id => {
        this.setState({ selectedPostId: id });
    };

    render() {
        const posts = this.state.posts.map(post => {
            return (
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postClicked(post.id)}
                />
            );
        });
        return <section className={styles.Posts}>{posts}</section>;
    }
}

export default Posts;
