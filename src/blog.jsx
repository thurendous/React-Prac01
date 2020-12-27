import React from "react";
import Article from "./Article";

class Blog extends React.Component {
    constructor(props) {　// need this if it is class
        super(props);
        this.state = {
            isPublished: 1,
            order: 1,
        }
    }
    // 公開状態を反転させる関数
    togglePublished  = () => {
        this.setState({ isPublished: !this.state.isPublished})
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
                />
            </>
        )
    }
}

export default Blog;