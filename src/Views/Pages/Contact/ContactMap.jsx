import React from "react";

const ContactMap = () => {
  const iframe =
    "https://www.google.com/maps/d/embed?mid=1bG31d7cgIIW4g2-JDF1zMo8VAcO8jBI&ehbc=2E312F";

  const contactData = [
    {
      location: "Orlando",
      phone: "407-708-9175",
      email: "uskennedyorlando@cemex.com",
    },
    {
      location: "Tampa",
      phone: "813-565-3161",
      email: "uskennedytampa@cemex.com",
    },
    {
      location: "Brevard",
      phone: "321-878-8104",
      email: "uskennedybrevard@cemex.com",
    },
  ];
  const socialLinks = [
    { name: "Facebook", iconClass: "fa-facebook", url: "#" },
    { name: "Twitter", iconClass: "fa-x-twitter", url: "#" },
    { name: "YouTube", iconClass: "fa-youtube", url: "#" },
    { name: "Instagram", iconClass: "fa-instagram", url: "#" },
    { name: "LinkedIn", iconClass: "fa-linkedin", url: "#" },
  ];

  return (
    <>
      <section>
        <div className="container-fluid d-flex justify-content-center align-items-center contact-map">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 map-container">
                <div className="d-flex justify-content-center">
                  <iframe
                    src={iframe}
                    width="100%"
                    height="479"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-6 map-container">
                <div className="map-content">
                  <h2 className="text-uppercase mb-3">Connect With Us</h2>
                  <h1 className="connect-title mb-3">
                    Contact Kennedy Concrete
                  </h1>
                  <div>
                    <p className="connect-para mb-3">
                      At Kennedy Concrete, we’re committed to providing
                      exceptional service and high-quality concrete solutions
                      for projects of all sizes. Whether you’re a contractor, a
                      homeowner, or a business in need of concrete delivery,
                      we’re here to assist you every step of the way.
                    </p>
                    <p className="connect-para mb-3">
                      Our team is ready to answer your questions and ensure your
                      project runs smoothly from start to finish.
                    </p>
                  </div>

                  <div className="d-flex gap-2 mt-4">
                    {socialLinks.map((social, index) => (
                      <div
                        key={index}
                        className="social-media border d-flex justify-content-center align-items-center"
                      >
                        <i
                          className={`fa-brands ${social.iconClass} fs-6`}
                          title={social.name}
                        ></i>
                      </div>
                    ))}
                  </div>

                  <div className="cards mt-5">
                    {contactData.map((contact, index) => (
                      <div key={index}>
                        <h6 className="mb-2">{contact.location}</h6>
                        <p className="mb-2 contact-phone">
                          <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                        </p>
                        <p>
                          <a href={`mailto:${contact.email}`}>
                            {contact.email}
                          </a>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMap;
