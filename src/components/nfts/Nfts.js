import Rex from '../../images/Rex.jpg';
import Ellie from '../../images/Ellie.jpg';
import Brad from '../../images/Brad.jpg';
import Leslie from '../../images/Leslie.jpg';
import Marvin from '../../images/Marvin.jpg';
import Candice from '../../images/Candice.jpg';
import Percy from '../../images/Percy.jpg';
import Robin from '../../images/Robin.jpg';
import Dominick from '../../images/Dominick.jpg';
import Dixie from '../../images/Dixie.jpg';
import Kai from '../../images/Kai.jpg';
import Riley from '../../images/Riley.jpg';
import Logo from '../../Logo.png';
import HorizontalScroll from 'react-scroll-horizontal';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import './Nfts.css';

const Nfts = () => {

  return(
    <div className='main-nft'>
    <p id='punkidz' className='meet-the'>Meet the <GlitchClip><img className='main-logo' src={Logo} /></GlitchClip></p>
    {/* <HorizontalScroll style={{overflowX: 'scroll'}}> */}
      <div className='images'>
         <img className='nft' src={Rex} alt='Rex'/>
         <img className='nft' src={Ellie} alt='Ellie'/>
         <img className='nft' src={Marvin} alt='Marvin'/>
         <img className='nft' src={Dominick} alt='Dominick'/>
         <img className='nft' src={Leslie} alt='Leslie'/>
         <img className='nft' src={Candice} alt='Candice'/>
         <img className='nft' src={Dixie} alt='Dixie'/>
         <img className='nft' src={Riley} alt='Riley'/>
         <img className='nft' src={Percy} alt='Percy'/>
         <img className='nft' src={Kai} alt='Kai'/>
         <img className='nft' src={Robin} alt='Robin'/>
         <img className='nft' src={Brad} alt='Brad'/>
      </div>
    {/* </HorizontalScroll> */}
    </div>
  )
}

export default Nfts;
