import React from 'react'
import './icons.css'
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PercentIcon from '@mui/icons-material/Percent';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import AlignHorizontalCenterIcon from '@mui/icons-material/AlignHorizontalCenter';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import AlignHorizontalRightIcon from '@mui/icons-material/AlignHorizontalRight';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';

import AbcIcon from '@mui/icons-material/Abc';
import AirplanemodeInactiveIcon from '@mui/icons-material/AirplanemodeInactive';
import CreateIcon from '@mui/icons-material/Create';
import CropIcon from '@mui/icons-material/Crop';

import FunctionsIcon from '@mui/icons-material/Functions';

const icons = () => {
  return (
    <div className='header-icons'>
      
        <div className='icons1'>
            <UndoIcon  fontSize="small"   className='icn'/>
            <RedoIcon fontSize="small"   className='icn'/>
            <LocalPrintshopIcon fontSize="small"   className='icn'/>
            <FormatPaintIcon fontSize="small" className='icn'/>
            <div className='vl'></div>

            <AttachMoneyIcon fontSize="small"  color="disabled" className='icn'/>
            <PercentIcon fontSize="small"  color="disabled" className='icn'/>
            <p>123</p><ArrowDropDownIcon fontSize="small"  className='icn'/>
            <div className='vl'></div>

            <p className='tagP'>10</p><ArrowDropDownIcon fontSize="small" className='icn'/>
            <div className='vl'></div>

            <FormatBoldIcon fontSize="small"  color="disabled" className='icn'/>
            <FormatItalicIcon fontSize="small"  color="disabled" className='icn'/>
            <FormatColorTextIcon fontSize="small" className='icn'/>
            <div className='vl'></div>

            <AlignHorizontalCenterIcon fontSize="small"  color="disabled" className='icn'/>
            <AlignHorizontalLeftIcon fontSize="small"  color="disabled" className='icn'/>
            <AlignHorizontalRightIcon fontSize="small"  color="disabled" className='icn'/>
            <div className='vl'></div>

            <AbcIcon fontSize="small"  color="disabled" className='icn'/>
            <AirplanemodeInactiveIcon fontSize="small"  color="disabled" className='icn'/>
            <CreateIcon fontSize="small"  color="disabled" className='icn'/>
            <CropIcon fontSize="small"  color="disabled" className='icn'/>
        </div>


        <hr color='lightgrey'/>



        <div className='icon2'>
          <p className='tagP'>A1</p><ArrowDropDownIcon/>
          <div className='vl'></div>

          <FunctionsIcon fontSize="small"  color="disabled" className='icn'/>
          <div className='vl'></div>
        </div>
    </div>
  )
}

export default icons