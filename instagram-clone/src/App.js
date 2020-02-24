import React from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Header />
        <section className="App-main">
          <Post 
          nickname="Arpit" 
          avatar="https://instagram.fdel29-1.fna.fbcdn.net/v/t51.2885-19/s320x320/69107020_562291657842299_2363489111072833536_n.jpg?_nc_ht=instagram.fdel29-1.fna.fbcdn.net&_nc_ohc=ObeRZdFOz1kAX9ncgTL&oh=bc3871a013f46e18c0e29e53418137f7&oe=5E8386AF"  
          caption="We travel not to escape life, but for life not to escape us"
          image="https://loremflickr.com/cache/resized/65535_49434695073_3ef0e1f056_320_240_nofilter.jpg"
          />
          <Post 
          nickname="Arpit"
          avatar="https://instagram.fdel29-1.fna.fbcdn.net/v/t51.2885-19/s320x320/69107020_562291657842299_2363489111072833536_n.jpg?_nc_ht=instagram.fdel29-1.fna.fbcdn.net&_nc_ohc=ObeRZdFOz1kAX9ncgTL&oh=bc3871a013f46e18c0e29e53418137f7&oe=5E8386AF"
          caption="When this sadist world hits me down.
          I look at it and say-
          Shoot me again I ain't dead yet."
         image="data:image/png;base64,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" 

         />
        </section>
      </div>
    );
  }
}

export default App;
