import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">The Team Behind Purvanchal Bites</h2>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src="/foods/utkrisht.jpeg" className="team-img" alt="pic" />
              <h3 className="text-general-color">UTKRISHT UPADHYAY</h3>
              <div className="team-info">
                <p>Founder</p>
              </div>
              <p>
                Utkrisht Upadhyay is the visionary leader behind Purvanchal
                Bites, bringing his unique expertise, passion, and dedication to
                his role as Founder.{" "}
              </p>

              <ul className="team-icon">
                <li>
                  <a
                    href="https://www.linkedin.com/in/utkrisht-upadhyay-217577199/"
                    className="linkedin"
                  >
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="pinterest">
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="facebook">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src="/foods/shivam.jpeg" className="team-img" alt="pic" />

              <h3 className="text-general-color">SHIVAM PRATAP</h3>

              <div className="team-info">
                <p>Co-Founder</p>
              </div>

              <p>
                Shivam Pratap is a pivotal member of the leadership team at
                Purvanchal Bites, bringing his unique skills, expertise, and
                passion to his role as co-founder.
              </p>

              <ul className="team-icon">
                <li>
                  <a
                    href="https://www.linkedin.com/in//shivam-pratap-37b2b824b/"
                    className="linkedin"
                  >
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="pinterest">
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="facebook">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="/foods/arpita (2).jpeg"
                className="team-img"
                alt="pic"
              />

              <h3 className="text-general-color">ARPITA</h3>

              <div className="team-info">
                <p>Marketing Head</p>
              </div>

              <p>
                Arpita is a key leader driving the marketing strategy at
                Purvanchal Bites, bringing extensive experience, creativity, and
                innovation to the marketing team.
              </p>

              <ul className="team-icon">
                <li>
                  <a
                    href="https://www.linkedin.com/in/arpita-chauhan-ba1498244/"
                    className="linkedin"
                  >
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="pinterest">
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="facebook">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
