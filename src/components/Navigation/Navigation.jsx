import ConnectedAccount from "./ConnectedAccount";
import ConnectedNetwork from "./ConnectedNetwork";
import ClaimReward from "../ClaimReward/ClaimReward";
import "./Navigation.css";
import Cslogo from "../../../public/cslogo.png";
const Navigation = ()=>{
  return(
    <header className="navbar">
    <div className="navbar-btns">
      <ClaimReward />
    </div>
    <div className="navbar-acc">
      <ConnectedAccount />
      <ConnectedNetwork />
    <img src={Cslogo} className='cslogo' />
    </div>
  </header>
  )
}
export default Navigation;