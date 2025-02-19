import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="./foods/contact.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-primary p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            If you have any query about the product feel free to call anytime we are 24X7
            available
          </p>
          <p className="mt-3">
            <BiMailSend /> : Purvanchalbites01@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 9430802221
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;