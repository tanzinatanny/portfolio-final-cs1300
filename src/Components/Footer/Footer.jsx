import React from "react";
import separator from "../../images/separator-line.png";
import fb from "../../images/facebook.svg";
import linkedin from "../../images/linkedin.svg";
import insta from "../../images/instagram.svg";

function Footer() {

    let social_links = [
        {
            'id': 1,
            'name': 'instagram',
            'url': '#',
            'img': insta,
        },
        {
            'id': 2,
            'name': 'facebook',
            'url': '#',
            'img': fb,
        },
        {
            'id': 3,
            'name': 'linkedin',
            'url': '#',
            'img': linkedin,
        }
    ];

    const separator_style = {
        marginTop: 30,
    }

    return (
        <section className="social"><span>Follow me</span>
            <div className="social-imgs">
                {
                    social_links.map( link => {
                        return  <a key={link.id} href={link.url} target="_blank" rel="nofollow noreferrer">
                                    <img src={link.img} alt={link.name}/>
                                </a>
                    } )
                }
            </div>
            <img alt="" src={separator} style={separator_style}/>
        </section>

    );
}

export default Footer;
