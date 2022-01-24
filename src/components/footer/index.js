import React from "react";
import './styles.scss';

const addresses = [
  {
    town: "Amsterdam",
    address: "IJpromenade 1, 1031 KT Amsterdam, Netherlands",
    phone: "+32 057 9894",
    email: "amsterdam@webunlocked.com"
  },
  {
    town: "London",
    address: "Westminster, London SW1A OAA, United Kongdom",
    phone: "+44 072 12332",
    email: "london@webunlocked.com"
  },
  {
    town: "Zurich",
    address: "Museumstrasse 2, 8001 Zurich, Switzerland",
    phone: "+414 421 86511",
    email: "zurich@webunlocked.com"
  }
];

const Footer = () => {
  return (
    <div 
      className="footer"
      data-scroll
      data-scroll-speed={-7}
    >
      <div className="contact-addresses">
        {addresses.map(info => (
          <div key={info.town}>
            <h1>{info.town}</h1>
            <div>
              {info.address.split(',').map(element => (
                <p key={element}>{element}</p>
              ))}
            </div>
            <p>{info.phone}</p>
            <p>{info.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;