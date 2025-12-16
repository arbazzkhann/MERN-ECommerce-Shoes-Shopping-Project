import React from 'react';
import shoeImage from '../assets/Air Jordan 1 Low SE Craft 10295.jpeg';
import Shoes from '../Components/Shoes';

const Home = () => {
  return (
    <>
        <div>
            <section className="home">
                <div className='left'>
                    <h1>Product</h1>
                    <h5>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </h5>
                    <button>Share product</button>
                </div>
                <div className='right'>
                    <img src={shoeImage} alt="shoe-image" height="600px" width="450px"/>
                </div>
            </section>
            <div className='bg'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,64L30,74.7C60,85,120,107,180,138.7C240,171,300,213,360,224C420,235,480,213,540,208C600,203,660,213,720,229.3C780,245,840,267,900,266.7C960,267,1020,245,1080,240C1140,235,1200,245,1260,250.7C1320,256,1380,256,1410,256L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            </div>
        </div>

        <div className="recipe">
            <Shoes />
        </div>
    </>
  );
}

export default Home