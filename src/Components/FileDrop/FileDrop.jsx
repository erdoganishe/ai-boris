import React, { useState } from 'react';
import './FileDrop.css'; // Import your CSS file for styling (optional)
import 'buffer';
// import { TonClient } from "@ton/ton";
import { mnemonicToWalletKey } from "@ton/crypto";
// import { tonwebnemonic} from 'tonweb-mnemonic'

const FileDrop = () => {
  
  return (
    <div
      className={`file-drop-area  hidden`}
    >
        <input type='file' className='imput-files'/>
        <button id = "submit-button-file" onClick={()=>{
        
        }}>Submit</button>
<div>
       <h3 className='key-submit-h3'>Or just put your secret key</h3>
       <input className='key-input' placeholder='Your phrase...' type = 'text'></input>
       <button id = "submit-button-phrase" onClick={()=>{
            let val = document.getElementsByClassName("key-input")[0].value;
            console.log(val)
            
           
        }}>Submit</button>
    </div></div>
  );
};

export default FileDrop;
