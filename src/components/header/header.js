import React from 'react'
import logo from '../assets/spread-sheet-logo.png' 
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import './header.css'

const header = () => {
  return (
    <>
        <div className='header-container'>
        <img src={logo} alt="logo" className='logo'/>
            <div className='file-name'>
                <p>Hamdhan's spreadsheet</p>
                <StarOutlineIcon size='small'/>
            </div>
        </div>

        <div className='options'>
              
                  <li>File</li>
                  <li>Edit</li>
                  <li>View</li>
                  <li>Insert</li>
                  <li>Format</li>
                  <li>Data</li>
                  <li>Tools</li>
                  <li>Extension</li>
                  <li>Help</li>
              
            </div>
            <hr color='lightgrey'/>

    </>
  )
}

export default header