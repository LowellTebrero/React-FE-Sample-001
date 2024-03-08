import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({SetPlayState}) => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=> {SetPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>About UNIVERSITY</h3>
        <h2>Nurturing Tomorrow&apos;s Leader Today</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
          natus. Officia possimus porro autem eum doloremque tempore similique
          quos voluptates tenetur iure itaque quis mollitia ipsam id illum
          blanditiis perferendis architecto necessitatibus enim, cupiditate
          repellat! Quos perferendis unde inventore ea tempora rem consequuntur
          architecto, nesciunt illum rerum aut fuga delectus cumque officiis
          enim laudantium beatae molestias, voluptatum necessitatibus quas
          minima incidunt autem. Veniam nostrum nemo earum amet reprehenderit
          atque cumque illum. Id modi saepe molestiae possimus, soluta iste
          omnis a minima architecto sapiente rerum rem alias expedita debitis
          nulla consequatur? Error veniam nisi quisquam nobis! Aperiam
          consequatur sit dolor ipsam.
        </p>
      </div>
    </div>
  );
};

export default About;
