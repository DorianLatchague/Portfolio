import { Component } from 'react';
import './Footer.scss';
import { Link, animateScroll } from 'react-scroll';

export default class Footer extends Component<{
    isMobile: boolean
}> {
    calculateLinkOffset = () => {
        return this.props.isMobile ? 0 : -50;
    }
    render() {
        return <footer>
            <div className="container header-container">
                <h6 onClick={animateScroll.scrollToTop}>Dorian Latchague</h6>
                <ul className="footer-nav">
                    <Link smooth={true} spy={true} duration={500} offset={this.calculateLinkOffset()} activeClass="active" to="about"><li className="footer-nav-item">About Me</li></Link>
                    <Link smooth={true} spy={true} duration={500} offset={this.calculateLinkOffset()} activeClass="active" to="experience"><li className="footer-nav-item">Experience</li></Link>
                    <Link smooth={true} spy={true} duration={500} offset={this.calculateLinkOffset()} activeClass="active" to="technologies"><li className="footer-nav-item">Technologies</li></Link>
                    <Link smooth={true} spy={true} duration={500} offset={this.calculateLinkOffset()} activeClass="active" to="projects"><li className="footer-nav-item">Projects</li></Link>
                    <Link smooth={true} spy={true} duration={500} offset={this.calculateLinkOffset()} activeClass="active" to="contact"><li className="footer-nav-item">Contact</li></Link>
                </ul>
                <p className="text-center">Property of Dorian Latchague | Privacy Policy | © 2021 All Rights Reserved</p>
            </div>
        </footer>
    }
}
