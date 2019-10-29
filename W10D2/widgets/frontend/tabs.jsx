import React from "react";

class Header extends React.Component{
    render(){
        const selected = this.props.selectedPane;
        const headers = this.props.panes.map((pane,index)=>{
            const title = pane.title;
            const klass = index === selected ? 'active' : '';
            return(
                <li 
                    key={index} 
                    className={klass} 
                    onClick = {() => {this.props.onTabChose(index)} }> 
                    {title}{' '}
                </li>
            );
        })
        return (
            <ul className = 'tab-header'>
                {headers}
            </ul>
        );
    }
}

class Tabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            content: "",
            selected: 0
        }
    }
    render(){
        const {title, content, selected} = this.state;
        return(
            <div>
                <ul>
                    <li>
                        <h1>{title}</h1>
                        <article>{content}</article>
                    </li>
                </ul>
            </div>
        );
    }
}