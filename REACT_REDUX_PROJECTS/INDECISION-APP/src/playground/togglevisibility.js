
// let visibility=false
// const toggleVisibility=()=>{
//     visibility=!visibility
//     renderApp()
// }
// const renderApp= ()=>{
    
//     const jsx=(
//         <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details': 'Show details'}
//         </button>
//         {visibility && (<div><p>these are the details you can see</p></div>)}
//         </div>
//     )
//     ReactDOM.render(jsx, document.getElementById('app'))
// }
// renderApp();

class VisibilityToggle extends React.Component{

    constructor(props){
        super(props)
        this.handleToggleVisibility=this.handleToggleVisibility.bind(this)
        this.state={
            visibility:false
        }
    }
    handleToggleVisibility(){
        this.setState((prevState)=>{
            return {visibility:!prevState.visibility}
        })
    }

    render(){
        return(
            <div>
            <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
        {this.state.visibility ? 'Hide details': 'Show details'}
        </button>
        {this.state.visibility && (<div><p>these are the details you can see</p></div>)}
            </div>
        )
    }



}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

