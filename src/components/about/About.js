import './About.css';

const About = () => {
  return(
    <div className='about' id='about'>
    <div className='text'>
       <p className='top-text'>About Punk-Kidz</p>
       <p className='description'><strong style={{color: "#03fca1"}}>Punk-Kidz</strong> is a collection of 2000 unique NFTs that are randomly generated
        from custom made traits such as faces, hair, backgrounds and more that live on the
        Ethereum Blockchain. We will be releasing them in stages, each stage will
        have a unique symbol indicating what stage it came out in.</p>
      </div>
      <hr/>
      <hr className='hr-pink'/>
      <hr/>
    </div>
  )
}

export default About;
