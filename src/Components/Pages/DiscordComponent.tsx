import React, { useState } from "react";
import discordHq from "./Assets/discord hq.jpg";
import InfoComponent from "../InfoComponent";

const DiscordComponent = () => {
  const [benefitArray, setBenefitArray] = useState<string[]>([
    "Discord HQ: Our platform is our headquarters! Because we believe great work isn't tied to a physical space, most of our roles offer flexibility — whether it's from the comfort of your home (in approved locations), an inspiring office setting or a combo of both! No matter where your desk lives, we offer generous support to help you remain productive and engaged.",
    "Grow together: Look forward to developing both professionally and personally alongside your colleagues at Discord. All of our managers go through a leadership program, and we offer diverse trainings for everyone. No matter what your interests or skills are, there's a place on our platform for you to find and build belonging.",
    "Money matters: Discord strives to offer fair and competitive compensation packages, including equity. You'll have room to grow and be rewarded based on your contributions and impact at the company. Take advantage of our retirement offerings (including 401k matching in the U.S.) to meet your financial goals.",
    "Health benefits: At Discord, we health-care about you! We offer flexible health plans that cover both physical and mental healthcare.",
    "Family support: Spend some quality time with the next generation with parental leave, fertility, adoption, and surrogacy benefits.",
    "R&R: Stay refreshed with four weeks of PTO, 14+ paid holidays and flexible sick time (which includes mental health days).",
    "Gender-affirming care: Many medical insurance providers consider much of the treatment vital to one’s gender transition as cosmetic. We don’t. Use up to $20,000 for transition-related procedures.",
    "Wellness on us: Take advantage of a quarterly stipend for your gym membership or other activities to keep you feeling great. Plus virtual yoga every week!",
    "Giving back: Whatever social cause you’re passionate about, take a day (or two) off to make an impact. While you're at it, take advantage of $1,000/year in donation matching to charitable organizations!",
  ]);

  const [requirementArray, setRequirementArray] = useState<string[]>([
    "3-5 years of professional experience working on high traffic web pages",
    "Strong grasp of mobile and desktop website fundamentals, specifically: TypeScript/JavaScript, CSS, HTML, and React",
    "Excellent knowledge of web performance, especially as it relates to Core Web Vitals",
    "Comfort picking up and integrating new third party tools",
    "Clear communication and the ability to operate in a collaborative environment of cross-functional partners.",
    "Familiarity w/ bundlers like webpack and an understanding of their impact on web performance",
  ]);

  const [whyTxt, setWhyTxt] = useState<string>(
    "Why Discord? Well first of all they give you a choice to be remote, and all of the benefits are great! For example, they have family support, health benefits for mental care and even a stipend for gym memberships or other activities! And another plus to the benefits are a salary range from 165k to 178k + equity + benefits. Aside from the money and benefits aspect, I really align discord's values, which are being able to build genuine relationships with friends or communites, being original, being reliable, being playful and being relatable. If I were to actually be hired at discord, I would want to achieve, enhancing my skillset as a software engineer, and possibly acquiring a hire position. Now I sort of qualify for the skillsets needed when it comes to the programming languages, but I will have to learn new skills in order to actually qualify. For example, I would need 3-5 more years of experience when it comes to high traffic web pages, more knowlegde on core web vitals and also more knowledge on how to operate in a collaborative environment of cross-functional partners."
  );
  return (
    <>
      <InfoComponent
        jobLink="https://discord.com/jobs/7183130002"
        job="Software Engineer, Design Foundations"
        hq={discordHq}
        why={whyTxt}
        benefits={benefitArray}
        requirements={requirementArray}
        hqAlt="Image representing Discord"
      />
    </>
  );
};

export default DiscordComponent;
