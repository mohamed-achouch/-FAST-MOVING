import React from 'react'
import "../assets/styles/qoute.css";
import {  useDispatch } from 'react-redux';
import { setShow } from '../features/Slices/Slice';
const Qoute = () => {
  const dispatch = useDispatch();
  return (
    <button className='qoute' onClick={() =>  dispatch(setShow())} href='/#'>get a qoute</button>
  )
}

export default Qoute