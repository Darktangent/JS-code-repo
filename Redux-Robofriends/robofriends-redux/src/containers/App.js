import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import { connect } from 'react-redux'
//import {robots} from './robots'
import './App.css'
import Scroll from '../components/Scroll.js'
import ErrorBoundry from '../components/ErrorBoundry';
import {setSearchField, requestRobots} from '../actions'
// import { searchRobots } from '../reducers'

// const state = {
   
// }

const mapStateToProps=state=>{

    return {
        searchField: state.searchRobots.searchField,
        robots:state.requestRobots.robots,
        isPending:state.requestRobots.isPending,
        error: state.requestRobots.error
    }
} 
const mapDispatchToProps= (dispatch)=>{
    return {onSearchChange :(event)=>dispatch(setSearchField(event.target.value)),
        onRequestRobots:()=>dispatch(requestRobots)
    }
}

class App extends Component{

    // constructor(){
    //     super()
    //     this.state={
    //         robots : [],
    //         //searchField:''
    //     }
    // }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/users').then(response=>{

        // return response.json()
        // }).then(users=>{
        //     this.setState({robots:users})
        // })

        this.props.onRequestRobots()




      // this.setState({robots:robots})
    }

    // onSearchChange=(event)=>{
    //     this.setState({searchField: event.target.value})
        
        // const filteredRobots = this.state.robots.filter(robots=>{
        //     return robots.name.toLowerCase().includes(this.state.SearchBoxsearchField.toLowerCase())
        // })
        
    


    render() {
        //const {robots}= this.state
        const {searchField, onSearchChange, robots, isPending}= this.props
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        //
        // if(!isPending){
        //     return <h1>Loading</h1>
        // } else {

        
        return (
            <div className='tc'>
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                { isPending?<h1>Loading robots</h1>:
                <ErrorBoundry>
                <CardList robots={filteredRobots}/>
                </ErrorBoundry>
                }
                </Scroll>

            </div>
        )
    //}else block
    }
   
}



export default  connect(mapStateToProps,mapDispatchToProps)(App)