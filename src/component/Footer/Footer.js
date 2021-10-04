import React from 'react';

const Footer = () => {
    return (
        <div className="main-footer bg-dark text-white p-5">
            <hr />
            <div className="container">
                <div className="row">
                    {/* column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>THE PROVIDERS</h4>
                        <hr />
                        <p>As one of the leading IT solution providers of Bangladesh,we are working with the vision of making the nation proficient in the Global IT village by building a platform which serves business owners as well as freelancers with comprehensive training for IT skills and professional enterprise solution.</p>
                    </div>
                    {/* column 2 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Our Courses</h4>
                        <hr />
                        <ul className="list-unstyled">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>
                    {/* column 3 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Quick Links</h4>
                        <hr />
                        <ul className="list-unstyled">
                            <li>Home</li>
                            <li>About us</li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    {/* column 4 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Contact Us</h4>
                        <hr />
                        <ul className="list-unstyled">
                            <li>Chattogram,Bangladesh</li>
                            <li>info@creativeitzone.com</li>
                            <li>+880151635****</li>
                            <li>+002105457****
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                {/* Footer bottom */}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Creative IT Zone - All Rights Reserved
                    </p>
                    <p><small>Developed by Subrota</small></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;