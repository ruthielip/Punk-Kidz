import './Team.css';
import PrincessMyshkin from '../../images/PrincessMyshkin.jpg';
import Sid from '../../images/Sid.jpg';
import Atara from '../../images/Atara.jpg';

const Team = () => {
  return(
    <div className='team' id='team'>
    <hr/>
    <hr className='hr-pink'/>
    <hr/>
    <p className='team-title'>The Team</p>
    <div className='team-imgs'>
    {/* <hr/> */}
       <div className='img'>
          <img className='team-img first' src={PrincessMyshkin} alt='myshkin'/>
          <div className='info'>
             <p className='team-name'>Princess Myshkin</p>
             <p className='team-desc'>Artist/Developer</p>
             <div className='icons'>
                <a href='https://twitter.com/PrincessMyshkn' target="_blank"><i class="fab fa-twitter icon"></i></a>
                < a href='https://www.instagram.com/princessmyshkn/' target="_blank"><i class="fab fa-instagram icon"></i></a>
             </div>
          </div>
       </div>
       {/* <hr/> */}
       <div className='img firstimg'>
          <div className='info'>
             <p className='team-name'>Sid</p>
             <p className='team-desc'>Manager/Co-founder</p>
          </div>
          <img className='team-img second' src={Sid} alt='sid'/>
       </div>

       <div className='img secondimg'>
          <img className='team-img second' src={Sid} alt='sid'/>
          <div className='info'>
             <p className='team-name'>Sid</p>
             <p className='team-desc'>Manager/Co-founder</p>
          </div>
       </div>

       {/* <hr/> */}
    </div>
    </div>
  )
}

export default Team;
