import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testimonials = () => {

    const slider = useRef();
    let translateX = 0;

    const slideForward = () => {
        if(translateX > -50){
            translateX -= 25;
        }
        slider.current.style.transform = `translateX(${translateX}%)`
    }

    const slideBackward = () => {
        if(translateX < 0){
            translateX += 25;
        }
        slider.current.style.transform = `translateX(${translateX}%)`
    }


  return (
    <div className="testimonials" id="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward}/>
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Ariel Lopez</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur laboriosam, eligendi repellat quas obcaecati mollitia
              eveniet necessitatibus qui quibusdam exercitationem quasi
              inventore tempore ea sunt eum, similique, cupiditate cumque nobis!
            </p>
            </div>
            
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Derick Durante</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur laboriosam, eligendi repellat quas obcaecati mollitia
              eveniet necessitatibus qui quibusdam exercitationem quasi
              inventore tempore ea sunt eum, similique, cupiditate cumque nobis!
            </p>
            </div>
            
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>John Lloyd Rosanes</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur laboriosam, eligendi repellat quas obcaecati mollitia
              eveniet necessitatibus qui quibusdam exercitationem quasi
              inventore tempore ea sunt eum, similique, cupiditate cumque nobis!
            </p>
            </div>
            
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Master Yvan</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur laboriosam, eligendi repellat quas obcaecati mollitia
              eveniet necessitatibus qui quibusdam exercitationem quasi
              inventore tempore ea sunt eum, similique, cupiditate cumque nobis!
            </p>
            </div>        
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
