import './App.css';

import { Article, Brand, CTA, Feature, Navbar} from './Components'
import { Blog, Features, Footer, Header, Possibility, WhatGPt } from './Containers';

function App() {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brand></Brand>
      <WhatGPt></WhatGPt>
      <Features></Features>
      <Possibility></Possibility>
      <CTA></CTA>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
