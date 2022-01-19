import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../../Logo.png';

const Navbar = () => {
  return(
    <div className='main'>
       <div className='navbar'>
          <div className='left-nav'>
             <AnchorLink href='#main'> <img src={Logo} height='50px'/> </AnchorLink>
          </div>
          <div className='right-nav'>
             <AnchorLink className='glitch' href='#punkidz'>Punk-Kidz</AnchorLink>
             <AnchorLink className='glitch' href='#about'>About</AnchorLink>
             <AnchorLink className='glitch' href='#join'>Join</AnchorLink>
             <AnchorLink className='glitch' href='#team'>Team</AnchorLink>
          </div>
       </div>
    </div>
  )
}

export default Navbar;
