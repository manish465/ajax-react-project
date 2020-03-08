import React, { Component } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import styles from "./Blog.module.css";

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: 0,
    };

    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPost = posts.map(post => {
                    return { ...post, author: "Manish" };
                });
                this.setState({ posts: updatedPost });
            });
    }

    postClicked = id => {
        this.setState({ selectedPostId: id });
        console.log(this.state.selectedPostId);
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

        return (
            <div>
                <section className={styles.Posts}>{posts}</section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
