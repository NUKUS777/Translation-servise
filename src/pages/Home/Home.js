import { NavLink } from "react-router-dom";
import "./home.css";
import About from "../../img/about_img.jpg";
import styled from "styled-components";
// import Up from "../../img/up-arrow.png";

export const Home = () => {
  return (
    <>
      <main>
        <Hero className="hero">
          <Container className="container">
            <Hero_inner className="hero_inner">
              <Hero_left className="hero_left">
                <Hero_title className="hero_title">
                  Professional{" "}
                  <strong className="gradient-text">Translation</strong> at Your
                  Finger Tips!
                </Hero_title>
                <Hero_text className="hero_text">
                  Quis egestas felis eu fermentum adarcu suscipit quis ut
                  gravida dolor amet justo In purus integer dui enim vitae vitae
                  congue volutpat tincidunt sed ac non tempor massa ultricies
                  eget.
                </Hero_text>
                <NavLink className="hero_link" to="/#">
                  Our Services
                </NavLink>
              </Hero_left>
              <Hero_form
                action="http://24.199.117.223:8080/api/v1/orders/w-sec/"
                method="POST"
                className="hero_form"
              >
                <Form_title className="form_title">
                  Get Your Translation Now
                </Form_title>
                <Form_text className="form_text">
                  Suspendisse morbi mauris gravida tellus integer ucibus tellus
                  inut condimentum blandit mus auctor nulla.
                </Form_text>
                <input className="hero__input" type="text" id="name" placeholder="Ismingizni kiriting"/>
                <textarea name="message"></textarea>
                <label className="hero_label">
                  <select name="Translate from" required>
                    <option selected disabled value="">
                      Translate from
                    </option>
                    <option value="1">English</option>
                    <option value="2">Uzbek</option>
                  </select>
                  <select name="Translate to" required>
                    <option selected disabled value="">
                      Translate to
                    </option>
                    <option value="2">Uzbek</option>
                    <option value="1">English</option>
                  </select>
                  <select name="Select Service" required>
                    <option selected disabled value="">
                      Select Service
                    </option>
                    <option value="1">Service 1</option>
                    <option value="2">Service 2</option>
                  </select>
                  <Form_input
                    required
                    className="form_input"
                    type="tel"
                    name="tel"
                    placeholder="Tel"
                    minlength="7"
                    maxlength="13"
                  />
                  <Form_input
                    required
                    className="form_input"
                    type="number"
                    name="raqam"
                    aria-label="raqam"
                    placeholder="0"
                    min="1"
                    max="100000"
                  ></Form_input>
                </label>
                <Form_submit
                  className="form_submit"
                  type="submit"
                  value="Get started"
                />
              </Hero_form>
            </Hero_inner>
          </Container>
        </Hero>
        <section className="about">
          <div className="container">
            <div className="about_inner">
              <div className="about_left">
                <h3 className="about_title">About Translantic</h3>
                <p className="about_text">
                  Quis egestas felis eu fermentum adarcu suscipit quis ugravida
                  dolor amet justo In purus integer dui enim vitae vitae congue
                  volutpat tincidunt sed non tempor massa ultricies egetuiamet
                  just purus integer dui enim vitae vitae congu volutpat
                  tincidunt sed ac non tempor massa ultricies eget.
                </p>
                <p className="about_text">
                  Quis egestas felis eu fermentum adarcu suscipit quis gravida
                  dolor amet justo In purus integer dui enim vitae vitae congue
                  volutpat tincidunt sed ac non tempor massa ultricies eget .
                </p>
                <NavLink className="about_link" to="/#">
                  Read More
                </NavLink>
              </div>
              <img
                className="about_img"
                src={About}
                max-width="600"
                alt="About translante"
              />
            </div>
          </div>
        </section>
        <section className="sevice">
          <div className="container">
            <div className="service_inner">
              <h2 className="service_title">We Focus On Many Industries</h2>
              <p className="service_text">
                Quis egestas felis eu fermentum adarcu suscipit quis ut gravida
                dolor amet justo In purus integer dui enim vitae vitae congue
                volutpat tincidunt sed ac non tempor massa.
              </p>
              <div className="service_inner_div">
                <div className="service_inner_div_img">
                  <img className="service_img" width="450" src={About} />
                  <img className="service_img" width="450" src={About} />
                </div>
                <div>
                  <NavLink className="service_link" to="/#">
                    <img
                      className="service_link_img"
                      width="50"
                      height="60"
                      src={About}
                    />
                    <div className="service_link_div">
                      <h3 className="service_link_title">
                        Translation Service
                      </h3>
                      <p className="service_link_text">
                        Mattis pellentesque aenean viverra sdf ewrsd 4rfsdf
                        aliquam molestie eget.
                      </p>
                    </div>
                  </NavLink>
                  <NavLink className="service_link" to="/#">
                    <img
                      className="service_link_img"
                      width="50"
                      height="60"
                      src={About}
                    />
                    <div className="service_link_div">
                      <h3 className="service_link_title">
                        Translation Service
                      </h3>
                      <p className="service_link_text">
                        Mattis pellentesque aenean viverra aliquam molestie
                        eget.
                      </p>
                    </div>
                  </NavLink>
                  <NavLink className="service_link" to="/#">
                    <img
                      className="service_link_img"
                      width="50"
                      height="60"
                      src={About}
                    />
                    <div className="service_link_div">
                      <h3 className="service_link_title">
                        Translation Service
                      </h3>
                      <p className="service_link_text">
                        Mattis pellentesque aenean viverra aliquam molestie
                        eget.
                      </p>
                    </div>
                  </NavLink>
                  <NavLink className="service_link" to="/#">
                    <img
                      className="service_link_img"
                      width="50"
                      height="60"
                      src={About}
                    />
                    <div className="service_link_div">
                      <h3 className="service_link_title">
                        Translation Service
                      </h3>
                      <p className="service_link_text">
                        Mattis pellentesque aenean viverra aliquam molestie
                        eget.
                      </p>
                    </div>
                  </NavLink>
                  <NavLink className="service_link" to="/#">
                    <img
                      className="service_link_img"
                      width="50"
                      height="60"
                      src={About}
                    />
                    <div className="service_link_div">
                      <h3 className="service_link_title">
                        Translation Service
                      </h3>
                      <p className="service_link_text">
                        Mattis pellentesque aenean viverra aliquam molestie
                        eget.
                      </p>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="choose">
          <div className="container">
            <div className="choose_inner">
              <h2 className="choose_title">Why Choose Us</h2>
              <p className="choose_text">
                Quis egestas felis eu fermentum adarcu suscipit quis ut gravida
                dolor amet justo In purus integer dui enim vitae vitae congue
                volutpat tincidunt sed ac non tempor massa.
              </p>
              <div className="choose_bottom">
                <div className="choose_left">
                  <ul className="choose_list">
                    <li className="choose_item">
                      <img
                        className="choose_item_img"
                        width="50"
                        height="60"
                        src={About}
                      />
                      <h3 className="choose_item_title">
                        24 Customer Services
                      </h3>
                      <p className="choose_item_text">
                        Suspendisse morbi mauris gravida tellus integer egestas
                        ucibus tellus inut condimentum blandit mus auctor.
                      </p>
                    </li>
                    <li className="choose_item">
                      <img
                        className="choose_item_img"
                        width="50"
                        height="60"
                        src={About}
                      />
                      <h3 className="choose_item_title">Guarantee</h3>
                      <p className="choose_item_text">
                        Suspendisse morbi mauris gravida tellus integer egestas
                        ucibus tellus inut condimentum blandit mus auctor.
                      </p>
                    </li>
                  </ul>
                  <ul className="choose_list">
                    <li className="choose_item">
                      <img
                        className="choose_item_img"
                        width="50"
                        height="60"
                        src={About}
                      />
                      <h3 className="choose_item_title">Fast Delivery</h3>
                      <p className="choose_item_text">
                        Suspendisse morbi mauris gravida tellus integer egestas
                        ucibus tellus inut condimentum blandit mus auctor.
                      </p>
                    </li>
                    <li className="choose_item">
                      <img
                        className="choose_item_img"
                        width="50"
                        height="60"
                        src={About}
                      />
                      <h3 className="choose_item_title">Free Consultation</h3>
                      <p className="choose_item_text">
                        Suspendisse morbi mauris gravida tellus integer egestas
                        ucibus tellus inut condimentum blandit mus auctor.
                      </p>
                    </li>
                  </ul>
                </div>
                <img className="choose_img" width="500" src={About} />
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <div className="container">
            <div className="testimonials_inner">
              <h2 className="testimonials_title">
                We Focus On Many Industries
              </h2>
              <p className="testimonials_text">
                Quis egestas felis eu fermentum adarcu suscipit quis ut gravida
                dolor amet justo In purus integer dui enim vitae vitae congue
                volutpat tincidunt sed ac non tempor massa.
              </p>
              <ul className="testimonials_list">
                <li className="testimonials_item">
                  <img
                    className="testimonials_item_img"
                    width="50"
                    height="60"
                    src={About}
                  />
                  <p className="testimonials_item_text">
                    “ Augue sed viverra nulla Interdum mia bibendum lerisqu
                    ictuam tincid nec feugi ugue tincidunt esutiamum diam ruoa
                    turpis Nuncsed Augueed viverra nulla Interdum Quis egestas
                    felis eu fermentum adarcu suscipit quis ut gravida dolo. ”
                  </p>
                  <p className="testimonials_item_name">Mark Grant</p>
                  <p className="testimonials_item_type">Document Translation</p>
                </li>
                <li className="testimonials_item">
                  <img
                    className="testimonials_item_img"
                    width="50"
                    height="60"
                    src={About}
                  />
                  <p className="testimonials_item_text">
                    “ Augue sed viverra nulla Interdum mia bibendum lerisqu
                    ictuam tincid nec feugi ugue tincidunt esutiamum diam ruoa
                    turpis Nuncsed Augueed viverra nulla Interdum Quis egestas
                    felis eu fermentum adarcu suscipit quis ut gravida dolo. ”
                  </p>
                  <p className="testimonials_item_name">Mark Grant</p>
                  <p className="testimonials_item_type">Document Translation</p>
                </li>
                <li className="testimonials_item">
                  <img
                    className="testimonials_item_img"
                    width="50"
                    height="60"
                    src={About}
                  />
                  <p className="testimonials_item_text">
                    “ Augue sed viverra nulla Interdum mia bibendum lerisqu
                    ictuam tincid nec feugi ugue tincidunt esutiamum diam ruoa
                    turpis Nuncsed Augueed viverra nulla Interdum Quis egestas
                    felis eu fermentum adarcu suscipit quis ut gravida dolo. ”
                  </p>
                  <p className="testimonials_item_name">Mark Grant</p>
                  <p className="testimonials_item_type">Document Translation</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      {/* <NavLink className="" to="/*">
        <Upimg width="50" src={Up} alt="Up img" />
      </NavLink> */}
    </>
  );
};

// -------------------------------------Hero-------------------------
const Hero = styled.section``;
const Container = styled.div`
  max-width: 1240px;
`;
const Hero_inner = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
const Hero_left = styled.div`
 magin:0 auto;
`;
const Hero_title = styled.h2`
  margin: 0;
  margin-top: 70px;
  font-size: 75px;
  color: #1f1f1f;
  max-width: 600px;
  @media only screen and (max-width: 1300px) {
    font-size: 50px;
    max-width: 400px;
    margin-right: 20px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 50px;
    max-width: 83%;
    margin: auto;
    margin-top: 30px;
    text-align: center;
  }
  @media only screen and (max-width: 576px) {
    margin-top: 20px;
    font-size: 30px;
  }
`;
const Hero_text = styled.p`
  margin: 0;
  margin-top: 30px;
  color: #1f1f1f;
  max-width: 600px;
  font-size: 20px;
  @media only screen and (max-width: 1300px) {
    font-size: 18px;
    max-width: 400px;
    margin-right: 20px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 20px;
    max-width: 85%;
    text-align: center;
    margin: auto;
    margin-top: 30px;
  }
  @media only screen and (max-width: 576px) {
    margin-top: 20px;
    font-size: 16px;
  }
`;
const Hero_form = styled.form`
  margin-top: 60px;
  background: var(
    --collour-button,
    linear-gradient(90deg, #f46141 0%, #ffc202 100%)
  );
  max-width: 420px;
  min-height: 550px;
  padding: 40px 20px;
  border-radius: 20px;
  margin-bottom: 50px;
  @media only screen and (max-width: 950px) {
    max-width: 300px;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin:0 auto;
    margin-top: 40px;
    max-width: 450px;
  }
  @media only screen and (max-width: 576px) {
    height: 440px;
    padding-top: 20px;
  }
`;
const Form_title = styled.h3`
  font-size: 30px;
  margin: 0;
  @media only screen and (max-width: 950px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
  @media only screen and (max-width: 576px) {
    font-size: 22px;
    margin-top: 0px;
  }
`;
const Form_text = styled.p`
  font-size: 20px;
  margin: 0;
  margin-bottom: 20px;
  @media only screen and (max-width: 950px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    margin-top: 10px;
  }
  @media only screen and (max-width: 576px) {
    font-size: 16px;
    margin-top: 7px;
  }
`;
const Form_input = styled.input`
  display: block;
  width: 390px;
  height: 52px;
  border-radius: 8px;
  border: none;
  padding: 0 10px;
  margin-bottom: 20px;
  @media only screen and (max-width: 950px) {
    max-width: 270px;
  }
  @media only screen and (max-width: 768px) {
    width: 400px;
    max-width: 94%;
    margin-right: 0;
  }
  @media only screen and (max-width: 576px) {
    margin-bottom: 15px;
    max-width: 93%;
    height: 45px;
  }
  @media only screen and (max-width: 576px) {
    max-width: 92%;
  }
`;
const Form_submit = styled.input`
  width: 406px;
  height: 50px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  @media only screen and (max-width: 950px) {
    max-width: 290px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    margin-right: 0;
  }
  @media only screen and (max-width: 576px) {
    height: 45px;
  }
`;

// const Upimg = styled.img`
//   position: fixed;
//   z-index: 5;
//   right: 20px;
//   bottom: 20px;
// `;
