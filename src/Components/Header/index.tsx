import { Component, Dispatch, SetStateAction } from 'react';
import './Header.scss';
import { Link, animateScroll } from 'react-scroll';

export default class Header extends Component<{
        navToggled: boolean,
        setNavToggled: Dispatch<SetStateAction<boolean>>,
        isMobile: boolean;
    }> {
    toggleNav = () => {
        if (this.props.navToggled) {
            document.removeEventListener('keydown', this.escapeKeyHandler);
            this.props.setNavToggled(false);
        } else {
            document.addEventListener('keydown', this.escapeKeyHandler);
            this.props.setNavToggled(true);
        }
    };
    componentWillUnmount() {
        if (window) {
            window.removeEventListener('keydown', this.escapeKeyHandler);
        }
    };
    onResizeIsMobile = () => {
        this.setState({isMobile: this.isMobile()});
    }
    isMobile = () => {
        if (!window) {
            return false;
        } else if (window.innerWidth <= 1000) {
            return true;
        }
        return false;
    };
    escapeKeyHandler = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            this.toggleNav();
        }
    }
    calculateLinkOffset = () => {
        return this.props.isMobile ? 0 : -50;
    }
    render() {
        return <header>
            <div className="container header-container">
                <h6 onClick={animateScroll.scrollToTop}>Dorian&nbsp;Latchague</h6>
                <div className={`nav${this.props.navToggled ? ' active' : ''}`}>
                    <ul className="container nav-container">
                    <Link onClick={this.toggleNav} smooth={true} spy={true} duration={500} offset={this.calculateLinkOffset()} className="scroll-link" activeClass="active" to="about"><li className="nav-item">About&nbsp;Me</li></Link>
                    <Link onClick={this.toggleNav} smooth={true} spy={true} duration={500} offset={this.calculateLinkOffset()} className="scroll-link" activeClass="active" to="experience"><li className="nav-item">Experience</li></Link>
                    <Link onClick={this.toggleNav} smooth={true} spy={true} duration={500} offset={this.calculateLinkOffset()} className="scroll-link" activeClass="active" to="technologies"><li className="nav-item">Technologies</li></Link>
                    <Link onClick={this.toggleNav} smooth={true} spy={true} duration={500} offset={this.calculateLinkOffset()} className="scroll-link" activeClass="active" to="projects"><li className="nav-item">Projects</li></Link>
                    <Link onClick={this.toggleNav} smooth={true} spy={true} duration={500} offset={this.calculateLinkOffset()} className="scroll-link" activeClass="active" to="contact"><li className="nav-item">Contact</li></Link>
                    </ul>
                </div>
                <div onClick={this.toggleNav} className={`nav-toggle${this.props.navToggled ? ' active' : ''}`}>
                    <div className="buns">
                        <div className="bun"></div>
                        <div className="bun"></div>
                    </div>
                </div>
            </div>
        </header>
    }
}
