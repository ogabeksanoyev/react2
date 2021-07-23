
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from '../Header/Header';
import Pack from '../SectionPack/App';
import Card from '../sectionCard/App';
import Why from '../sectionWhy/App';
import Frame from '../sectionFrame/App';
import Footer from '../footer/footer';


class App extends React.Component{
  render(){
    return <div className="App">
     <Header></Header>
     <Pack></Pack>
     <Card></Card>
     <Why></Why>
     <Frame></Frame>
     <hr className="m-0" />
     <Footer />
    </div>
  }
}
export default App
