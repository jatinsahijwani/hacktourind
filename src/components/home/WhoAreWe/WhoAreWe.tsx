import Image from "next/image";
import { FC } from "react";
import s from "./WhoAreWe.module.scss";

const WhoAreWe: FC = () => {
  return (
    <div className={`${s.container} who-we-are-main`} data-aos="who-we-are">
      <div className={s.team}>
        <div
          className={s.thumnailWrapper}
          data-aos="fade-in"
          data-aos-delay="0"
          data-aos-anchor=".who-we-are-main"
        >
          <Image
            src="/ourteam.png"
            width={1300}
            height={770}
            objectFit="cover"
            alt=""
          />
        </div>
        <div className={`${s.titleWrapper} titleWrapper`}>
          {Array(4)
            .fill("WHO ARE WE")
            .map((item, i) => (
              <span className={`${s.title} title blockRevealer`} key={i}>
                {item}
              </span>
            ))}
        </div>
      </div>
      <div className="container">
        <div className={`${s.intro} who-are-we-intro`}>
          <span data-aos="fade-up" data-aos-anchor=".who-are-we-intro">
            We are HackTour IND.
            <br /> We are everywhere.
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-anchor=".who-are-we-intro"
          >
            Web3 is inevitable.
            <br /> So are we.
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-anchor=".who-are-we-intro"
          >
            We Don’t Follow Trends. <br/> We Set Protocols.
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-anchor=".who-are-we-intro"
          >
            code=law; <br/>
            community=power;
          </span>
        </div>
        <div className={s.details}>
          <div className="row">
            <div className="col-md-6">
              <p data-aos="fade-up">
              HackTour India is on a mission to decentralize the future by bringing Web3 to every corner of the country. While Web2 keeps users locked in, we advocate for open, trustless systems that empower individuals. Annoyed that control and profit still dominate over true innovation? So are we. Traveling city by city, we’re equipping developers, students, and creators with the tools to break free, take ownership, and build without permission. The future is decentralized—we’re here to make it happen, now.
              </p>
            </div>
            <div className="col-md-6" data-aos="fade-up">
              <span className={s.quote}>
              The system isn’t broken. <br/> It was built that way. <br/> We’re building something better.
              </span>
              {/* <p>
                Eu viverra morbi nec enim. Amet integer lobortis vitae velit id
                tincidunt. Nulla pellentesque aliquet at volutpat. Ut tortor
                est, at blandit et pellentesque. Urna ut nulla leo vel
                suspendisse id platea id lorem.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
