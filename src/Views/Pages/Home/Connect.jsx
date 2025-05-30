import React from "react";
import Button from "../../../Views/Components/Buttons/Button";
const Connect = () => {
  const iframe =
    "https://www.google.com/maps/d/embed?mid=1bG31d7cgIIW4g2-JDF1zMo8VAcO8jBI&ehbc=2E312F";
  return (
    <>
      <section className="py-5">
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <iframe
                  src={iframe}
                  width="100%"
                  height="480"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>

              <div className="col-lg-6 col-md-6 connect">
                <h6 className="text-danger fw-bold ">CONNECT WITH US</h6>
                <h1 className="display-6">
                  Schedule Your Concrete Delivery with Kennedy
                </h1>
                <p className="text">
                  Our easy online ordering and scheduling system makes getting
                  your concrete quick and straightforward. Whether you’re in
                  Tampa, Orlando, the Space Coast, our experienced team is ready
                  to assist. Let us help you get your project off the ground
                  with the quality and efficiency Kennedy Concrete is known for.
                </p>
                <h4 id="sec-title">
                  <strong> Quality Service, Guaranteed</strong>
                </h4>
                <p className="text">
                  Don’t just take our word for it. Experience the Kennedy
                  Concrete difference firsthand. We’re the trusted choice for
                  quality ready-mix concrete in Tampa, Orlando, Ocala, and the
                  Space Coast. Contact us for a free quote and discover why
                  homeowners and contractors alike choose Kennedy Concrete.
                </p>
                <div className="d-flex gap-2 mt-4">
                  <div className="social-media border d-flex justify-content-center align-items-center">
                    <i class="fa-brands fa-facebook fs-5"></i>
                  </div>
                  <div className="social-media border d-flex justify-content-center align-items-center">
                    <i class="fa-brands fa-x-twitter fs-5"></i>
                  </div>
                  <div className="social-media border d-flex justify-content-center align-items-center">
                    <i class="fa-brands fa-youtube fs-5"></i>
                  </div>
                  <div className="social-media border d-flex justify-content-center align-items-center">
                    <i class="fa-brands fa-instagram fs-5"></i>
                  </div>
                  <div className="social-media border d-flex justify-content-center align-items-center">
                    <i class="fa-brands fa-linkedin fs-5"></i>
                  </div>
                </div>

                <div className="mt-5">
                  <Button bgColor="#DE0B18" textColor="#fff" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Connect;
