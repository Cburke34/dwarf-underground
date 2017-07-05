import React, { Component } from 'react'
import Header from './Header'
import ArticleTitle from './ArticleTitle'
import ArticleBody from './ArticleBody'
import HammerAd from './HammerAd'
import OtherArticles from './OtherArticles'


class Main extends Component {
  render() {
    return (
<main className="expanded row">
        <Header />
            <ArticleTitle />
                <ArticleBody />
                  <HammerAd /> 
                    <OtherArticles />

</main>
    );
  }
}

export default Main