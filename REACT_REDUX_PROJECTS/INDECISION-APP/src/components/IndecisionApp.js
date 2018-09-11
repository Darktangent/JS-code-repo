import React from "react";
import AddOption from "./AddOption.js";

import Action from "./Action";
import Header from "./Header";
import Options from "./Options.js";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  //   constructor(props) {
  //     super(props);
  //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  //     this.handlePick = this.handlePick.bind(this);
  //     this.handleAddOption = this.handleAddOption.bind(this);
  //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
  //     this.state = {
  //       options: []
  //     };
  //   }
  handleDeleteOptions = () => {
    this.setState(() => {
      return {
        options: []
      };
    });
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  };
  handleAddOption = option => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    // alert(option);
    this.setState(() => ({
      selectedOption: option
    }));
  };
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
        <OptionModal
          handleClearSelectedOption={this.handleClearSelectedOption}
          selectedOption={this.state.selectedOption}
        />
      </div>
    );
  }
}
export default IndecisionApp;
