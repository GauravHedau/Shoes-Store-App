import React from "react";
import "./querylocation.css";

const QueryAndLocation = () => {
  return (
    <div className="query">
      <div className="location">
        <iframe
        className="locationimage"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14925.079044037426!2d78.59031326977541!3d20.739857500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd47fb372088bb9%3A0x23b2b991eec152d8!2sShiva%20shoes!5e0!3m2!1sen!2sin!4v1690393336664!5m2!1sen!2sin"
          width={600}
          height={500}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="newsletter">
        <h2>Newsletter</h2>
        <p>
          Sign up for exclusive offers, original stories, activism awareness,
          events and more.
        </p>
        <input type="email" placeholder="email" />
        <button>Sign Up</button>
        <div className="links">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook" />
          </a>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-youtube" style={{ color: "red" }} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram" style={{ color: "red" }} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default QueryAndLocation;
