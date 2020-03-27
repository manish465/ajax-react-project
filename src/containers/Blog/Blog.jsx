import React, { Component } from "react";
import styles from "./Blog.module.css";
import Posts from "./Posts/Posts";
import { Route } from "react-router";

class Blog extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className={styles.Blog}>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/new-post">New Post</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts} />
            </div>
        );
    }
}

export default Blog;
