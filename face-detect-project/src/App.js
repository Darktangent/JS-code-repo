import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Logo from './Components/Logo/Logo'
import Rank from './Components/Rank/Rank'
import Signin from './Components/Signin/Signin'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import Register from './Components/Register/Register'
import FaceRecognition from './Components/FaceRecognition/FaceRecognition.js'
import './App.css';

const app= new Clarifai.App({
  apiKey:'3acc432fd1a746e583591166463222dd'
})
const particlesOptions={

    particles: {
      line_linked: {
        shadow: {
          enable: true,
          color: "#3CA9D1",
          blur: 5
        }
      }
    }

}
  class App extends Component {
    constructor(){
      super()
      this.state={
        input:'',
        imageUrl:'',
        box:{},
        route:'sign',
        isSignedIn:false
      }
    }
    onInputChange= (e)=>{
      this.setState({input:e.target.value})
    }
    onButtonSubmit=()=>{
      this.setState({imageUrl:this.state.input})
      app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input )
      .then(response=> {
        // do something with response
        this.displayFaceBox(this.calculateFaceLocation(response))
      }).catch(err=> console.log(err))
      // function(err) {
      //   // there was an error
      // }

    }
    calculateFaceLocation=(data)=>{
      const clarifaiFace= data.outputs[0].data.regions[0].region_info.bounding_box
      const image= document.getElementById('inputimage')
      const width=Number(image.width)
      const height = Number(image.height)
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }
    displayFaceBox = (box)=>{
      this.setState({box:box})
    }
    onRouteChange=(r)=>{
      if (r==='signout'){
        this.setState({isSignedIn:false})
      }else if (r==='home'){
        this.setState({isSignedIn:true})
      }
      this.setState({route:r})
    }
    render() {
      const {isSignedIn, imageUrl, route, box} = this.state
      return (
        <div className="App">
          <Particles className='particles'
            params={particlesOptions}

          />

          <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
          {route==='home'?
            <div>
              <Logo />
              <Rank />
              <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
              <FaceRecognition imageUrl={imageUrl} box={box} />

            </div>
          : (
            route ==='sign'?
              <Signin onRouteChange={this.onRouteChange} />:
              <Register onRouteChange={this.onRouteChange} />
          )
          }



        </div>
      );
      }
      }



export default App;
