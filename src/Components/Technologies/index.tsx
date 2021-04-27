import { Component } from "react";
import TechnologyCard from "../TechnologyCard";
import { Element } from 'react-scroll';
import './Technologies.scss';
import { FaSass, FaCss3, FaHtml5, FaReact, FaJs, FaAngular, FaAws, FaPython, FaWordpress, FaGithub, FaNpm, FaGulp, FaBootstrap } from 'react-icons/fa';
import { SiAuth0, SiBabel, SiCsharp, SiDocker, SiDotNet, SiFlask, SiGit, SiGoogleads, SiGoogleanalytics, SiJquery, SiLinux, SiMongodb, SiMysql, SiNginx, SiPantheon, SiRedis, SiRedux, SiSocketDotIo, SiStripe, SiTypescript, SiVim, SiWebpack } from 'react-icons/si';
import { DiDjango } from 'react-icons/di';

export default class Technologies extends Component {
    render() {
        return <Element name="technologies">
            <section id="technologies" className="container">
                <h2>&lt;Technologies /&gt;</h2>
                <div className="honeycomb">
                    <TechnologyCard tech="Django" Icon={DiDjango} description="Test Description..." experience="Test Experience..." color="#0C4B33" />
                    <TechnologyCard tech="CSS" Icon={FaCss3} description="Test Description..." experience="Test Experience..." color="#28a4d8" />
                    <TechnologyCard tech="HTML" Icon={FaHtml5} description="Test Description..." experience="Test Experience..." color="#dd4b25" />
                    <TechnologyCard tech="React"  Icon={FaReact} description="Test Description..." experience="Test Experience..." color="#5ed3f4" />
                    <TechnologyCard tech="JavaScript" Icon={FaJs} description="Test Description..." experience="Test Experience..." color="#f7df1f" />
                    <TechnologyCard tech="Webpack" Icon={SiWebpack} description="Test Description..." experience="Test Experience..." color="#1a6bac" />
                    <TechnologyCard tech="Redux" Icon={SiRedux} description="Test Description..." experience="Test Experience..." color="#764abc" />
                    <TechnologyCard tech="Flask" Icon={SiFlask} description="Test Description..." experience="Test Experience..." color="#000000" />
                    <TechnologyCard tech="MySQL" Icon={SiMysql} description="Test Description..." experience="Test Experience..." color="#f29221" />
                    <TechnologyCard tech="SASS" Icon={FaSass} description="Test Description..." experience="Test Experience..." color="#c66395" />
                    <TechnologyCard tech="Redis" Icon={SiRedis} description="Test Description..." experience="Test Experience..." color="#a51f17" />
                    <TechnologyCard tech="AWS" Icon={FaAws} description="Test Description..." experience="Test Experience..." color="#eb922d" />
                    <TechnologyCard tech="Auth0" Icon={SiAuth0} description="Test Description..." experience="Test Experience..." color="#000000" />
                    <TechnologyCard tech="C#" Icon={SiCsharp} description="Test Description..." experience="Test Experience..." color="#9e72d9" />
                    <TechnologyCard tech="npm" Icon={FaNpm} description="Test Description..." experience="Test Experience..." color="#cb3837" />
                    <TechnologyCard tech="Google Analytics" Icon={SiGoogleanalytics} description="Test Description..." experience="Test Experience..." color="#f9ab03" />
                    <TechnologyCard tech="Stripe" Icon={SiStripe} description="Test Description..." experience="Test Experience..." color="#6772e5" />
                    <TechnologyCard tech="Angular" Icon={FaAngular} description="Test Description..." experience="Test Experience..." color="#dd0031" />
                    <TechnologyCard tech="Python" Icon={FaPython} description="Test Description..." experience="Test Experience..." color="#3475a8" />
                    <TechnologyCard tech="MongoDb" Icon={SiMongodb} description="Test Description..." experience="Test Experience..." color="#13aa52" />
                    <TechnologyCard tech="Socket.io" Icon={SiSocketDotIo} description="Test Description..." experience="Test Experience..." color="#000000" />
                    <TechnologyCard tech="Docker" Icon={SiDocker} description="Test Description..." experience="Test Experience..." color="#0998e5" />
                    <TechnologyCard tech="Babel" Icon={SiBabel} description="Test Description..." experience="Test Experience..." color="#f5da55" />
                    <TechnologyCard tech="Google Ads" Icon={SiGoogleads} description="Test Description..." experience="Test Experience..." color="#4385f4" />
                    <TechnologyCard tech="NGINX" Icon={SiNginx} description="Test Description..." experience="Test Experience..." color="#039137" />
                    <TechnologyCard tech="ASP.NET" Icon={SiDotNet} description="Test Description..." experience="Test Experience..." color="#146fb1" />
                    <TechnologyCard tech="Git" Icon={SiGit} description="Test Description..." experience="Test Experience..." color="#f05133" />
                    <TechnologyCard tech="Wordpress" Icon={FaWordpress} description="Test Description..." experience="Test Experience..." color="#075d9d" />
                    <TechnologyCard tech="Pantheon" Icon={SiPantheon} description="Test Description..." experience="Test Experience..." color="#ffdc28" />
                    <TechnologyCard tech="Github" Icon={FaGithub} description="Test Description..." experience="Test Experience..." color="#24292e" />
                    <TechnologyCard tech="TypeScript" Icon={SiTypescript} description="Test Description..." experience="Test Experience..." color="#2d79c7" />
                    <TechnologyCard tech="Gulp" Icon={FaGulp} description="Test Description..." experience="Test Experience..." color="#eb4a4b" />
                    <TechnologyCard tech="Linux" Icon={SiLinux} description="Test Description..." experience="Test Experience..." color="#000000" />
                    <TechnologyCard tech="Bootstrap" Icon={FaBootstrap} description="Test Description..." experience="Test Experience..." color="#533b78" />
                    <TechnologyCard tech="jQuery" Icon={SiJquery} description="Test Description..." experience="Test Experience..." color="#0965a7" />
                    <TechnologyCard tech="Vim" Icon={SiVim} description="Test Description..." experience="Test Experience..." color="#039331" />
                </div>
            </section>
        </Element>
    }
}