import React,{ useState } from "react";
import './css/LoadFunds.css';
import Dropdown from "./Dropdown";


export default function ToggleLoadFunds(props) {
  const [hide, setHide] = useState(false);

  const toggleHide = () => {
    setHide(!hide);
  };

  return (
    <div>
      <div className="sf-2-crypto-div" 
           style={{ display: hide ? "block" : "none" }}>
              <div className="selection-headings">
      <p className="select-coin">Select the coin you wish to load</p>
      <p className="select-network">Network</p>
      <div className="div-wallet">
        <p className="note-p"><b>NOTE:</b> Select the same network while sending the crypto. If a different network is selected, the funds might never recover.</p>
        <p className="wallet-address">Wallet Address</p>
        <div className="QR-code"></div>

      </div>
      
      </div>
    
    <Dropdown datatype='crypto'/>
    
   
    
    </div>
    <div className="sf-2-fiat-div" style={{ display: hide ? "none" : "block" }}>
    <p className="loadf-h1">Receiving Details</p>
    <div className="div-wallet">
        <p className="Cashtag-h-p">Cashtag</p>
        <p className="cashtag-value">{props.cashtag}</p>
        <p className="IBAN">IBAN</p>
        <p className="IBAN-val">INT001CASHAPP213623</p>
        <div className="QR-code"></div>
      
      </div>

      </div>
    {/* <button id="sf-div2-cryptobtn" onClick={toggleHide}>Crypto</button> */}
    <button id="sf-div2-fiatbtn" onClick={toggleHide}>Fiat</button>
    

    </div>
      
   
  );
}