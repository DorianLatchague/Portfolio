import { Component } from "react";
import './AboutMe.scss';
import { Element } from 'react-scroll';

export default class AboutMe extends Component {
    render() {
        return <Element name="about">
            <section id="about" className="container">
                <h2>&lt;About Me /&gt;</h2>
                <div className="line">
                    <span className="line-number">1</span><p>I am a web developer with a background in digital marketing, full-stack instruction and music performance. I presently work as a developer enhancing customer experiences while solving real-life marketing challenges.</p>
                </div>
                <div className="line">
                    <span className="line-number">2</span><p>My passion for technology started through my grandfather, a senior software developer. Both my parents also began their careers as software developers. I learned from them a keen interest in technology that combined organically with my skills as a performing cellist.</p>
                </div>
                <div className="line">
                    <span className="line-number">3</span><p>During my time at the Coding Dojo, all of my life experiences helped me grow in my programming as a creative thinker, collaborator and someone who likes to think outside the box.</p>
                </div>
                <div className="line">
                    <span className="line-number">4</span><p>There is tremendous value in approaching problems from different angles. My programming path has meshed with colleagues coming from a computer science degree in wonderful ways. Together, we are more powerful.</p>
                </div>
            </section>
        </Element>
    }
}