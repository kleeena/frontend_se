import React,{ useState } from "react";
import Dropdown from "./Dropdown";


export default function ToggleSendFunds() {
  const [hide, setHide] = useState(false);

  const toggleHide = () => {
    setHide(!hide);
  };

  return (
    <div>
      <div className="sf-2-crypto-div" 
           style={{ display: hide ? "block" : "none" }}>
              <div className="selection-headings">
      <p className="select-coin">Select the coin you wish to send</p>
      <p className="select-network">Network</p>
      <p className="wallet-address">Wallet Address</p>
      </div>
    
    <Dropdown datatype='crypto'/>
    <input id="wallet-address" placeholder="Address" type='text'></input>
    <div className="div-bottom">
      <p className="amount-heading">Amount</p>
      <p className="memo-heading">Memo</p>
      <input className="amount-input" placeholder="0.00001 - 999999"></input>
      <input className="memo-input" placeholder="Type Here"></input>
    </div>
    
    </div>
    <div className="sf-2-fiat-div" style={{ display: hide ? "none" : "block" }}>
        <Dropdown datatype='bank'/>
        <input id="account-number" placeholder="$Cashtag" type='text'></input>
        <div className="selection-headings">
      <p className="select-coin">Select the bank</p>
      <p className="select-network-sf">Cashtag</p>
      <p className="wallet-address-sf">Currency</p>
      </div>
        <div className="div-bottom">
      <p className="amount-heading">Amount</p>
      <p className="memo-heading">Memo</p>
      <input className="amount-input" placeholder="0.00001 - 999999"></input>
      <input className="memo-input" placeholder="Type Here"></input>
      
      </div>

      </div>
    {/* <button id="sf-div2-cryptobtn" onClick={toggleHide}>Crypto</button> */}
    <button id="sf-div2-fiatbtn" >Fiat</button>
    <button className="send-btn" >Send</button>

    </div>
      
   
  );
}