import React,{useState} from 'react';
import { styled } from '@mui/system';
import TableData from './tableData'
import './table.css'

//material ui table styling

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const Root = styled('div')(
  ({ theme }) => `
  table {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    cursor:pointer;
  }

  
  th {
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    text-align: center;
    padding: 5px 35px 5px 35px;
    height: 10px;
  }


  th {
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : grey[100]};
  }
  `,
);





export default function UnstyledTable() {
  
  const [color,setColor] = useState('td')

  const onChangeColor = ()=>{
    console.log("clicked")
    setColor('table2')
  }

  //table jsx code
  return (
    <Root>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th></th>
            {TableData.map((item)=>{
              return <th>{item.id}</th>
            })}
          </tr> 
        </thead>


        <tbody > 
          
          <tr>
            <th title='box' className='thead'>1</th>
            {TableData.map((blank)=>{
              return <td onClick={onChangeColor} className={color}></td>
            })}
          </tr>

          <tr>
            <th>2</th>
            {TableData.map((blank)=>{
              return <td onClick={onChangeColor} className={color}></td>
            })}
          </tr>

          <tr>
            <th>3</th>
            {TableData.map((blank)=>{
              return <td></td>
            })}
          </tr> 

          <tr>
            <th>4</th>
            {TableData.map((blank)=>{
              return <td></td>
            })}
          </tr> 

          <tr>
            <th>5</th>
            {TableData.map((blank)=>{
              return <td></td>
            })}
          </tr> 

          <tr>
            <th>6</th>
            {TableData.map((blank)=>{
              return <td></td>
            })}
          </tr> 

          <tr>
            <th>7</th>
            {TableData.map((blank)=>{
              return <td></td>
            })}
          </tr> 

          <tr>
            <th>8</th>
            {TableData.map((blank)=>{
              return <td></td>
            })}
          </tr> 

          <tr>
            <th>9</th>
            {TableData.map((blank)=>{
              return <td></td>
            })}
          </tr> 

          <tr>
            <th>10</th>
            {TableData.map((blank)=>{
              return <td></td>
            })}
          </tr>        
            
        </tbody>
        
      </table>
    </Root>
  );
}

 