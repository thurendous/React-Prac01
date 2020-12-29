import React from "react";
import Article from "./Article";
// import {Foo, Bar} from "./components/FooBar";
import * as FooBar from "./components/FooBar";
import Hoge from "./components/Hoge";

const Blog = () => {
    // componentDidMount() {
    //     document.getElementById("counter").addEventListener("click", this.countUp)
    // }

    // componentDidUpdate() {
    //     if (this.state.count > 1) {
    //         this.setState({count: 0})
    //     }
    // }

    // countUp = () => {
    //     this.setState({ count: this.state.count + 1})
    // }

    // listenerの解除することでリソースを開放する　
    // componentWillUnmount() {
    //     document.getElementById("counter").removeEventListener("click", this.countUp)
    // }

        const authorName =  "ZZW";
        return (
            // can also be <React.fragment>
            <> 
                <Article 
                title = "Reactの基本"
                // count={this.state.count}
                />
                <FooBar.Foo />
                <FooBar.Bar />
                <Hoge />
            </>
        )
}

export default Blog;