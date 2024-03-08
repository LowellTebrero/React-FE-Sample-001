import "./Hero.css";
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <h1>Pre ano na, Kaya pa?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          iste animi? Unde asperiores tempore aperiam pariatur temporibus
          mollitia ducimus omnis, nihil blanditiis? Libero vero dignissimos
          error eveniet, nostrum a alias.
        </p>
        <button className="btn">Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
};

export default Hero;
