import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const onMouseOut = (e) => {
    e.target.style.color = "#cccccc";
  };

  const SocialWidget = [
    {
      SocialMediaName: "LinkedIn",
      ProfileLink: "https://www.linkedin.com/in/akhil-panwar-bba035202",
      fontAwesomeIconName: "fab fa-linkedin",
      OnMouseOverColor: "#4875B4",
    },
    {
      SocialMediaName: "GitHub",
      ProfileLink: "https://github.com/kashyapraju",
      fontAwesomeIconName: "fab fa-github",
      OnMouseOverColor: "#211F1F",
    },
   
    {
      SocialMediaName: "Twitter",
      ProfileLink: "https://twitter.com/PukarsinghP?t=PAGj8g4ozWKoKduWE6x7LQ&s=09",
      fontAwesomeIconName: "fab fa-twitter",
      OnMouseOverColor: "#1da1f2",
    },
    
  ];

  return (
    <React.Fragment>
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 30,
            marginTop: "40px",
            textAlign: "center",
            fontFamily: "Roboto"
          }}
        >
          Created  by{" "}
          <a
            href="https://github.com/kashyapraju"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
              @Raju 

          </a>

          <a
            href="https://www.linkedin.com/in/akhil-panwar-bba035202"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
           _@Akhil 

          </a>
          <a
            href="https://www.linkedin.com/in/pukar-singh-pundir-a36a71250"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
              _@Pukar

          </a>

        </h6>
      </div>
      <div className={styles.container}>
        <br />
        <ul className="list" style={{ listStyleType: "none" }}>
          {SocialWidget.map((data, key) => {
            return (
              <li
                key={key}
                style={{ display: "inline-block", marginRight: "17px" }}
              >
                <a
                  onMouseOver={(e) => {
                    e.target.style.color = `${data.OnMouseOverColor}`;
                  }}
                  onMouseOut={onMouseOut}
                  href={data.ProfileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#cccccc", fontSize: "40px" }}
                >
                  <i className={`${data.fontAwesomeIconName}`}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 16,
            marginTop: "20px",
            textAlign: "center",
            fontFamily: "Roboto"
          }}
        >
          Data provided by{" "}
          <a
            href="https://github.com/mathdroid/covid-19-api"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
            Mathdroid
          </a>
        </h6>
      </div>
    </React.Fragment>
  );
};

export default Footer;
