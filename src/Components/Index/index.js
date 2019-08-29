import React, { Component } from 'react';
import './index.css';


export default class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="protfolio-wrap">


                    <header className="default-header">
                        <nav className="navbar navbar-expand-lg  navbar-light">
                            <div className="container">
                                <a className="navbar-brand" href="index.html">
                                    <img src="img/logo.png" alt="" />
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="text-white lnr lnr-menu"></span>
                                </button>

                                <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li><a href="/home">Home</a></li>
                                        <li><a href="/portfolio">Portfiolio</a></li>
                                        <li><a href="/service">Services</a></li>
                                        <li><a href="/testimonial">Testimonial</a></li>

                                        <li className="dropdown">
                                            <a className="dropdown-toggle" href="/" id="navbardrop" data-toggle="dropdown">
                                                Pages
                      </a>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="generic.html">Generic</a>
                                                <a className="dropdown-item" href="elements.html">Elements</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </header>

                    <section className="banner-area relative" id="home">
                        <div className="overlay overlay-bg"></div>
                        <div className="container">
                            <div className="row fullscreen d-flex align-items-center justify-content-center">
                                <div className="banner-content col-lg-10">
                                    <h5 className="text-uppercase">Now you can watch the Talent</h5>
                                    <h1>
                                        Let’s Explore Idea!
                    </h1>
                                    <a href="/" className="primary-btn text-uppercase">Explore Now</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="portfolio-area section-gap" id="portfolio">
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className="menu-content col-lg-10">
                                    <div className="title text-center">
                                        <h1 className="mb-10">This is what we can do for you</h1>
                                        <p>Who are in extremely love with eco friendly system</p>
                                    </div>
                                </div>
                            </div>

                            <div className="filters">
                                <ul>
                                    <li className="active" data-filter="*">All</li>
                                    <li data-filter=".corporate">Vector</li>
                                    <li data-filter=".personal">Raster</li>
                                    <li data-filter=".agency">UI/UX</li>
                                    <li data-filter=".portal">Printing</li>
                                </ul>
                            </div>

                            <div className="filters-content">
                                <div className="row grid">
                                    <div className="single-portfolio col-sm-4 all corporate">
                                        <div className="item">
                                            <img src="img/p1.jpg" alt="Work 1" />
                                            <div className="p-inner">
                                                <h4>3D Helmet Design</h4>
                                                <div className="cat">Corporate</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-portfolio col-sm-4 all personal">
                                        <div className="item">
                                            <img src="img/p2.jpg" alt="Work 1" />
                                            <div className="p-inner">
                                                <h4>2D Vinyl Design</h4>
                                                <div className="cat">Personal</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-portfolio col-sm-4 all agency">
                                        <div className="item">
                                            <img src="img/p3.jpg" alt="Work 1" />
                                            <div className="p-inner">
                                                <h5>Creative Poster Design</h5>
                                                <div className="cat">Agency</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-portfolio col-sm-4 all portal">
                                        <div className="item">
                                            <img src="img/p4.jpg" alt="Work 1" />
                                            <div className="p-inner">
                                                <h5>Embosed Logo Design</h5>
                                                <div className="cat">Portal</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="single-portfolio col-sm-4 all corporate">
                                        <div className="item">
                                            <img src="img/p5.jpg" alt="Work 1" />
                                            <div className="p-inner">
                                                <h4>3D Helmet Design</h4>
                                                <div className="cat">Corporate</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-portfolio col-sm-4 all personal">
                                        <div className="item">
                                            <img src="img/p6.jpg" alt="Work 1" />
                                            <div className="p-inner">
                                                <h4>2D Vinyl Design</h4>
                                                <div className="cat">Personal</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-portfolio col-sm-4 all agency">
                                        <div className="item">
                                            <img src="img/p2.jpg" alt="Work 1" />
                                            <div className="p-inner">
                                                <h5>Creative Poster Design</h5>
                                                <div className="cat">Agency</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-portfolio col-sm-4 all portal">
                                        <div className="item">
                                            <img src="img/p3.jpg" alt="Work 1" />
                                            <div className="p-inner">
                                                <h5>Embosed Logo Design</h5>
                                                <div className="cat">Portal</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-portfolio col-sm-4 all corporate">
                                        <div className="item">
                                            <img src="img/p4.jpg" alt="Work 1" />
                                            <div className="p-inner">
                                                <h4>3D Helmet Design</h4>
                                                <div className="cat">Corporate</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-portfolio col-sm-4 all personal">
                                        <div className="item">
                                            <img src="img/p3.jpg" alt="Work 1" />
                                            <div className="p-inner">
                                                <h4>2D Vinyl Design</h4>
                                                <div className="cat">Personal</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-portfolio col-sm-4 all agency">
                                        <div className="item">
                                            <img src="img/p2.jpg" alt="Work 1" />
                                            <div className="p-inner">
                                                <h5>Creative Poster Design</h5>
                                                <div className="cat">Agency</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-portfolio col-sm-4 all portal">
                                        <div className="item">
                                            <img src="img/p1.jpg" alt="Work 1" />
                                            <div className="p-inner">
                                                <h5>Embosed Logo Design</h5>
                                                <div className="cat">Portal</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>

                    <section className="service-area section-gap relative" id="service">
                        <div className="overlay overlay-bg"></div>
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className="menu-content pb-60 col-lg-10">
                                    <div className="title text-center">
                                        <h1 className="mb-10 text-white">This is what we can do for you</h1>
                                        <p>Who are in extremely love with eco friendly system..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="services-area pb-100" >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="single-service">
                                        <img className="img-fluid" src="img/s1.png" alt="" />
                                        <h4>Vector Artworks</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="single-service">
                                        <img className="img-fluid" src="img/s2.png" alt="" />
                                        <h4>Corporate Identity</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="single-service">
                                        <img className="img-fluid" src="img/s3.png" alt="" />
                                        <h4>Art Direction Design</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="review-area section-gap" id="testimonial">
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className="menu-content pb-60 col-lg-10">
                                    <div className="title text-center">
                                        <h1 className="mb-10">How Our Customers Treat Us</h1>
                                        <p>Who are in extremely love with eco friendly system..</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="single-review">
                                        <img src="img/c1.png" alt="" />
                                        <div className="title d-flex flex-row">
                                            <a href="/"><h4>Fannie Rowe</h4></a>
                                            <div className="star">
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                        <p>
                                            Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
                        </p>
                                    </div>
                                    <div className="single-review">
                                        <img src="img/c3.png" alt="" />
                                        <div className="title d-flex flex-row">
                                            <a href="/"><h4>Lillie Summers</h4></a>
                                            <div className="star">
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                        <p>
                                            Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-review">
                                        <img src="img/c2.png" alt="" />
                                        <div className="title d-flex flex-row">
                                            <a href="/"><h4>Hulda Sutton</h4></a>
                                            <div className="star">
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-starchecked"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                        <p>
                                            Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
                        </p>
                                    </div>
                                    <div className="single-review">
                                        <img src="img/c4.png" alt="" />
                                        <div className="title d-flex flex-row">
                                            <a href="/"><h4>Ruth Burns</h4></a>
                                            <div className="star">
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                        <p>
                                            Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer className="footer-area section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-md-6 col-sm-6">
                                    <div className="single-footer-widget">
                                        <h6>About Us</h6>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.
                        </p>
                                        <p className="footer-text">

                                            Copyright &copy; All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com">Colorlib</a>

                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-5  col-md-6 col-sm-6">
                                    <div className="single-footer-widget">
                                        <h6>Newsletter</h6>
                                        <p>Stay update with our latest</p>
                                        <div className="" id="mc_embed_signup">
                                            <form target="_blank" novalidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="form-inline">
                                                <input className="form-control" name="EMAIL" placeholder="Enter Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '" required="" type="email" />
                                                <button className="click-btn btn btn-default"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                                                <div style={{ position: ' absolute', left: '-5000px' }}>
                                                    <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text" />
                                                </div>

                                                <div className="info"></div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
                                    <div className="single-footer-widget">
                                        <h6>Follow Us</h6>
                                        <p>Let us be social</p>
                                        <div className="footer-social d-flex align-items-center">
                                            <a href="/"><i className="fa fa-facebook"></i></a>
                                            <a href="/"><i className="fa fa-twitter"></i></a>
                                            <a href="/"><i className="fa fa-dribbble"></i></a>
                                            <a href="/"><i className="fa fa-behance"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>

                </div>
            </React.Fragment>
        );
    }
}