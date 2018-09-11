class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => {
          options: options;
        });
      }
    } catch (e) {}
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  }
  handleAddOption(option) {
    if (!option) {
      return "Enter Valid value to add";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState(prevState => {
      return {
        options: prevState.options.concat([option])
      };
    });
  }

  render() {
    // const title= "Indecision"
    const subttile = "Put your life in the hands of a computer";
    // const options = ['thing one', 'thing two', 'thing four' ]

    return (
      <div>
        <Header subttile={subttile} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <User />
      </div>
    );
  }
}
// IndecisionApp.defaultProps = {
//   options: []
// };

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subttile && <h2>{props.subttile}</h2>}
    </div>
  );
};
Header.defaultProps = {
  title: "Indecision"
};

// class Header extends React.Component{

//     render(){
//         return(
//             <div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subttile}</h2>

//             </div>
//         )
//     }
// }
const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};
// class Action extends React.Component{

//     // handlePick(){
//     //     alert('handlePick')
//     // }
//     render(){
//         return(

//             <div>
//                 <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>

//             </div>
//         )
//     }
// }

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {props.options.length}
      {props.options.map(option => (
        //return <p key={option}>{option}</p>
        <Option
          key={option}
          optiontext={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

// class Options extends React.Component{

//     // constructor(props){
//     //     super(props)
//     //     this.handleRemoveAll=this.handleRemoveAll.bind(this)
//     // }
//     // handleRemoveAll(){

//     //     console.log(this.props.options)
//     // }
//     render(){
//         return (
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {this.props.options.length}
//                 {this.props.options.map((option)=>
//                 //return <p key={option}>{option}</p>
//                 <Option key={option} optiontext={option} />
//                 )}

//             </div>
//         )
//     }
// }

const Option = props => {
  return (
    <div>
      Option: {props.optiontext}
      <button
        onClick={e => {
          props.handleDeleteOption(props.optiontext);
        }}
      >
        remove
      </button>
    </div>
  );
};

// class Option extends React.Component{
//     render(){
//         return (
//             <div>
//                 Option: {this.props.optiontext}

//             </div>
//         )
//     }
// }

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(event) {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    // if(option){
    //     // IndecisionApp.options.push(option)
    //     // event.target.elements.option.value=""
    //     this.props.handleAddOption(option)

    // }
    this.setState(() => {
      return { error: error };
    });
    if (!error) {
      e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
        <p>AddOptions component here</p>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button> Add Option</button>
        </form>
      </div>
    );
  }
}

const User = () => {
  return (
    <div>
      <p>Name:</p>
      <p>Age:</p>
    </div>
  );
};

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
