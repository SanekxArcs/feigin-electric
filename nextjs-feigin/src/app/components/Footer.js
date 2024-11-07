export default function Footer() {
  return (
    <footer className="site-footer block h-[487px]">
      <div
        className="footer-top"
        style={{
          backgroundImage:
            "url(/web/20240921203304im_/https://feiginelectric.com/images/background/bg3.png)",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-5 col-xl-2 col-lg-2 col-sm-6 footer-col-4">
              <div className="widget widget_services border-0">
                <h5 className="footer-title text-white">Company</h5>
                <ul>
                  <li>
                    <a href="about.php">About Us</a>
                  </li>
                  <li>
                    <a href="products.php">Products</a>
                  </li>
                  <li>
                    <a href="case-studies.php">White Papers & Case Studies</a>
                  </li>
                  <li>
                    <a href="approach.php">Approach</a>
                  </li>
                  <li>
                    <a href="contact.php">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-7 col-xl-2 col-lg-3 col-sm-6 footer-col-4"></div>
            <div className="col-md-6 col-xl-4 col-lg-3 col-sm-6 footer-col-4">
              <div className="widget widget_getintuch">
                <h5 className="footer-title text-white">Contact us</h5>
                <ul>
                  <li>
                    <i className="ti-location-pin"></i>
                    <strong>address</strong> 176 Joo Chiat Road, #02-02 <br />
                    Singapore 427447
                  </li>
                  <li>
                    <i className="ti-email"></i>
                    <strong>email</strong>info@feiginelectric.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12 col-xl-4 col-lg-4 col-sm-6 footer-col-4">
              <div className="widget">
                <h5 className="footer-title text-white">
                  Subscribe To Our Newsletter
                </h5>
                <p className="text-capitalize mb-5">
                  A journey of a thousand miles begins with a single step
                </p>
                <div className="subscribe-form mb-5">
                  <form
                    className="dzSubscribe"
                    action="script/mailchamp.php"
                    method="post"
                  >
                    <div className="dzSubscribeMsg"></div>
                    <div className="input-group">
                      <input
                        name="dzEmail"
                        required
                        className="form-control"
                        placeholder="Your Email Id"
                        type="email"
                      />
                      <span className="input-group-btn">
                        <button
                          name="submit"
                          value="Submit"
                          type="submit"
                          className="site-button radius-xl btnhover16"
                        >
                          Subscribe
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
                <ul className="list-inline m-0">
                  <li>
                    <a
                      href="https://web.archive.org/web/20240921203304/https://www.facebook.com/FEIGINELECTRIC"
                      className="site-button facebook circle"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://web.archive.org/web/20240921203304/https://www.linkedin.com/company/31197429/"
                      className="site-button linkedin circle"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 text-left">
              <span>Copyright © 2020 Feigin Electric</span>
            </div>
            <div className="col-md-6 col-sm-6 text-right">
              <div className="widget-link">
                <ul>
                  <li>
                    <a href="https://web.archive.org/web/20240921203304/https://codepace.co/">
                      Delivered by Codepace
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
