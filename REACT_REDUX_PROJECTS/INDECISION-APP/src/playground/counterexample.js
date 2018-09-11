class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  componentdidMount() {
    const stringCount = localStorage.getItem("count");
    const count = parseInt(stringCount, 10);
    if (!isNaN(count)) {
      this.setState(() => {
        count: count;
      });
    }
  }
  componentDidUpdate(prevState, prevProps) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }
  handleAddOne() {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  }
  handleMinusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(Object.assign({ count: 0 }));
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
// Counter.defaultProps={
// 	count=0
// }
ReactDOM.render(<Counter />, document.getElementById("app"));

// let count=0
// const addOne=()=>{
// 	count++
// 	renderCounterApp()
// }
// const minusOne=()=>{
// 	count--
// 	renderCounterApp()
// }
// const reset=()=>{
// 	count=0
// 	renderCounterApp()
// }

// // const user = {
// // 	name:'Mike',
// // 	age:26,
// // 	location:'Texas',
// // 	item:[1,2,3]

// // }

// // function getLocation(location){

// // 	if(location){
// // 		return <p>Location: {location}</p>
// // 	}else {
// // 		return undefined
// // 	}
// // }
// // const template2 = (
// // 	<div>
// // 		<h1>{user.name ? user.name : "Anonymous" }</h1>
// // 		{(user.age && user.age>=18) && <p> {user.age}</p>}

// // 		{getLocation(user.location)}
// // 		<ol>
// // 			<li>{user.item[0]}</li>
// // 			<li>Item two</li>
// // 		</ol>
// // 	</div>
// // )

// const renderCounterApp=()=>{

// 	const templateTwo=(
// 		<div>
// 			<h1>Count: {count}</h1>
// 			<button onClick={addOne}>+1</button>
// 			<button onClick={minusOne}>-1</button>
// 			<button onClick={reset}>Reset</button>
// 		</div>
// 	// )}
