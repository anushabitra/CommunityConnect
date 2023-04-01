import React from "react";
import "../Sass/HomeComponent.scss";
import PostStatus from "./common/PostUpdate";
import Logo from "../assets/CC.png";
// import InstagramIcon from "@mui/icons-material/Instagram";
import Verification from "./Verification";
import AuthContext from "../api/AuthContext";

export default function HomeComponent({ currentUser }) {
  return (
    <div className="home-component">
      <AuthContext>
        <Verification />
      </AuthContext>

      <header className="header">
        {/* <div className="logo-box">
          <img src={Logo} alt="Logo" className="'logo" />
        </div> */}
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Community Connect</span>
            <span className="heading-primary-sub">
              is where Knowledge interchanges
            </span>
          </h1>
        </div>
      </header>
      <div className="textarea">
        <div className="textarea_1">
          <h1 className="textarea_header_1">About Us</h1>
          <p className="textarea_para_1">
            People are living in the fast developing technological world. The
            necessity to connect people with similar interests from the other
            side of the world is increasing. Students require their desired
            educational skills and job opportunities. Similarly companies and
            businesses have a need to find the right employees and business
            partners. In this technological era where information is available
            at fingertips, finding the most suitable interests has become highly
            vulnerable. In order to achieve this, a professional networking and
            career development website is built and presented in this report.
            The website serves as an online platform that helps people all over
            the world to find right courses, build their skills and helps to
            achieve personal and professional goals.
          </p>
        </div>
        <div className="textarea_2">
          <h1 className="textarea_header_2">Objective</h1>
          <p className="textarea_para_2">
            The main objective of “Professional networking and career
            development based website” is to easily connect with people of
            interested domains and make progress in their careers. This web
            application also helps recruiters to find better candidates.
            Business people can easily find their partners and competitors.
            Students can find educational institutions, new courses, and can
            increase their knowledge.
          </p>
        </div>
        <div className="textarea_3">
          <h1 className="textarea_header_3">Features</h1>
          <p className="textarea_para_3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            laboriosam architecto tenetur. Quos iusto corrupti asperiores id
            voluptatem provident enim harum ex dolorem quisquam, a blanditiis,
            quod repellat neque aspernatur. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Ducimus accusamus a sapiente odio
            accusantium labore atque quasi. At perspiciatis nam sint beatae
            aliquam, veniam voluptas voluptatum autem velit nisi.
            Reprehenderit?. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Voluptatem laboriosam architecto tenetur. Quos iusto corrupti
            asperiores id voluptatem provident enim harum ex dolorem quisquam, a
            blanditiis, quod repellat neque aspernatur. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Sequi facere aliquid sint magni,
            nulla atque laudantium impedit quos voluptate autem cupiditate
            itaque et cumque iure quasi. Dolore voluptates enim alias.
          </p>
        </div>
      </div>
      {/* <div className="contact">
        <img src={InstagramIcon} />
      </div> */}
    </div>
  );
}
