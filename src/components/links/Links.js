import './Links.css'
import Boy from '../../Boy.png';
import Girl from '../../Girl.png';
import Opensea from '../../Opensea.png';

const Links = () => {
  return(
    <div className='links' id='join'>

    <div className='one'>
       <img className='girl' src={Girl} alt=''/>
    </div>

    <div className='two'>

      <p className='join'>Join us!</p>
      <div className='boxes'>
         <a href='https://opensea.io/collection/punkkidz' target="_blank"><div className='opensea box'><img className='sea' height='46px' width='46px' src={Opensea} alt=''/> OpenSea</div></a>
         <div className='discord box' style={{cursor: 'default'}}><i class="fab fa-discord"></i> Discord <span className='soon'>- Coming Soon!</span></div>
         <a href='https://twitter.com/PrincessMyshkn' target="_blank"><div className='twitter box'><i class="fab fa-twitter"></i> Twitter</div></a>
      </div>

      </div>

    </div>
  )
}

export default Links;
