import "./index.scss";
import React, { Component } from "react";
import contactBg from "../../assets/contactBg.png";
import { Form, Input, DatePicker, Select, Button } from "antd";

const ContactSection = () => {
  return (
    <div
      className="contact-section"
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundSize: "contain",
      }}
    >
      <div style={{ height: "301px", backdropFilter: "brightness(0.8)" }}>
        <div className="text">
          Feel Free to contact us for your customized meal plan
        </div>
        <div className="form">
          <div className="left-form">
            <>
              <Form layout="vertical">
                <Form.Item label="Your Name">
                  <Input />
                </Form.Item>
                <Form.Item label="Your Mobile Number">
                  <Input type="tel" maxLength={10} />
                </Form.Item>
              </Form>
            </>
            <>
              <Form layout="vertical">
                <Form.Item label="Your Email">
                  <Input />
                </Form.Item>
                <Form.Item label="Message">
                  <Input />
                </Form.Item>
              </Form>
            </>
          </div>
          <div className="form-button"><p>Send Now</p></div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
