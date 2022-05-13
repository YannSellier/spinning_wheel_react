import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import Start from "./Start";

class PageManager extends Component{
    state = {
        currentPageName: "start",
        currentPage: <Start/>,
        pages: [
            {name:"start", page:<Start handleClick={this.setCurrentPage}/>},
            {name:"form", page:<SignUpForm/>}
        ]
    };

    getCurrentPage = () => {
        return this.state.pages.find(page => page.name === this.currentPage).page;
    }
    getPageIndex = (pageName) => {
        return this.state.pages.findIndex(page => page.name === pageName);
    }
    getPageFromName = (pageName) => {
        return this.state.pages.find(page => page.name === pageName).page;
    }
    setCurrentPage = (pageName) => {
        this.setState({ currentPage: this.getPageFromName(pageName) });
    }

    render() {
        const currentPage = this.state.currentPage;
        return (<div>
            {currentPage}
        </div>);
    };
};

export default PageManager;