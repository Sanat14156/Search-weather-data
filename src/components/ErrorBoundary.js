import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state={
            isError:false
        }
    }
    static getDerivedStateFromError(){
        return{isError:true};
    }

    componentDidCatch(err,errinfo){
        console.log(err);
        console.log(errinfo);
    }
  render() {
    if(this.state.isError){
        return<div>
            <h2>please enter any city</h2>
            {this.props.children}
           
        </div>
    }
    else{
        return <div>{this.props.children}</div>
    }
  }
}
