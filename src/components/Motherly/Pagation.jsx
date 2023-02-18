import './Pagation.css'
import React from 'react'
import  Pagination  from '@mui/material/Pagination'

function Pagation() {
  return (
    <div>
        <Pagination  count={10} color="primary"/>
    </div>
  )
}

export default Pagation

