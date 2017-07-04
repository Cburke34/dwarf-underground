import React, { Component } from 'react';
import './App.css'
import Header from '.Header'
import ArticleTitle from '.ArticleTitle'
import ArticleBody from '.ArticleBody'
import HammerAd from '.HammerAd'
import OtherArticles from '.OtherArticles'
import Footer from '.Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
            <ArticleTitle />
                <ArticleBody />
                  <HammerAd /> 
                    <OtherArticles />
                    <Footer />
      </div>
    );
  }
}

export default App;
