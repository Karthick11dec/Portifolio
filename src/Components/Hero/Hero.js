import React, { Component } from "react";
import "./Hero.css"
import Photo from "../../Assets/Images/Portifolio.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
class Hero extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: props.loaded
        }
    }

    componentDidMount() {
        let TL = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero",
                start: "top 50%",
                end: "bottom top",
                toggleActions: "restart none none reset"
            }
        })
            .from(".image>img", { y: 100, opacity: 0, ease: "back", duration: 1 }, "<1")
            .from(".about>*", { x: -100, opacity: 0, ease: "back", duration: 1, stagger: .2 }, "<1")
        TL.pause()
        if (this.state.loaded) {
            TL.play()
        }
    }

    componentWillReceiveProps({ loaded }) {
        this.setState({ loaded })
    }

    render() {
        return (
            <section className="hero animated fadeIn ml-2 mr-2">
                <div className="row">
                    <div className="about">
                        <h4 className="compliment">
                            Hey THERE <span role="img" aria-label="Hi!">🙂</span>, I'm
                        </h4>
                        <h4 className="intro">
                            <i className="clean">Karthick Raja</i>
                        </h4>
                        <p className="bio">
                            I'm a MERN stack web developer and brand identity designer 
                            in building sleek and scalable user interface,
                            designing unique brand identities,
                            building optimal backend systems and
                            handling data's are well structured with database systems.
                        </p>
                        <div className="hero-cta">
                            <ul className="socials">
                                <li>
                                    <a href="./karthick-resume.pdf" target="_blank" rel="noopener noreferrer" >
                                        <span><i class="far fa-file-pdf fa-2x"></i></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/Karthick11dec?tab=repositories" target="_blank" rel="noopener noreferrer" >
                                        <span><i class="fab fa-github fa-2x"></i></span>
                                    </a>
                                </li>
                            </ul>
                            <a href="#portfolio">
                                <span className="d-flex mx-auto my-auto">My Portifolio
                                    <span className="icon icon-moonarrow-down2"></span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="image">
                        <img src={Photo} alt="" />
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero;