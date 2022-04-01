import React from 'react'
import './App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './component/Layout';
import { connect } from 'react-redux';
import DataCardPage from './component/CardPage/DataCardPage';
import AddCardMainPage from './component/MainPage/AddCardMainPage';

function App({data}) {
   
  return (
    <BrowserRouter>
    
      <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<AddCardMainPage/>}/>
            {Object.keys(data).map((item,index)=>{
              return <Route key={index} path={`/${index}`} element={<DataCardPage  text={item}/>}/>
            })}
          </Route>
      </Routes>
     
    
   
    </BrowserRouter>
    
  );
}
let mapStateToProps = (state) => ({
  data:state.dataCard.ListCard
})
export default connect(mapStateToProps,)(App);
