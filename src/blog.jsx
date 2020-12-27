import React from "react";
import Article from "./Article";
// import {Foo, Bar} from "./components/FooBar";
import * as FooBar from "./components/FooBar";
import Hoge from "./components/Hoge";

class Blog extends React.Component {
    constructor(props) {　// need this if it is class
        super(props);
        this.state = {
            isPublished: 1,
            count: 0
        }
    }

    componentDidMount() {
        document.getElementById("counter").addEventListener("click", this.countUp)
    }

    componentDidUpdate() {
        if (this.state.count > 1) {
            this.setState({count: 0})
        }
    }
    // 公開状態を反転させる関数
    togglePublished  = () => {
        // buttonクリックされたら、カウント数増える
        this.setState({ isPublished: !this.state.isPublished})
    }
    countUp = () => {
        this.setState({ count: this.state.count + 1})
    }

    // listenerの解除することでリソースを開放する　
    componentWillUnmount() {
        document.getElementById("counter").removeEventListener("click", this.countUp)
    }

    render() {
        const authorName =  "ZZW";
        return (
            // can also be <React.fragment>
            <> 
                <Article 
                title = "Reactの基本"
                isPublished={this.state.isPublished}
                toggle={()=>this.togglePublished()}
                count={this.state.count}
                />
                <FooBar.Foo />
                <FooBar.Bar />
                <Hoge />
            </>
        )
    }
}

export default Blog;