/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { FC } from "react";
import { AppConstant } from "src/constant/AppConstant";
import s from "./OurWork.module.scss";

const OurWork: FC = () => {
  return (
    <div className={s.container}>
      <img
        className={`${s.title} desktop-only`}
        src="/images/layout/what-are-we-doing.svg"
        alt=""
        data-aos="fade-up"
      />
      <img
        className={`${s.title} mobile-only`}
        src="/images/layout/what-are-we-doing-mobile.svg"
        alt=""
        data-aos="fade-up"
      />

      <div className="container">
        <div className={s.house} data-aos="fade-up">
          <div className={s.content}>
            {/* <span className={s.heading}>Community Events</span> */}
          </div>
        </div>
        <div className={s.products}>
          {AppConstant.products.map((product, i) => (
            <div
              className={s.item}
              key={i}
              data-aos="slide-up"
              data-aos-delay={i * 50}
            >
              <div className={s.product}>
                <span className={s.name}>{product.name}</span>
                <span className={s.description}>{product.description}</span>

                <div className={s.imageWrapper}>
                  <Image
                    src={product.image}
                    width={500}
                    height={500}
                    alt={product.name}
                    objectFit="contain"
                  />
                </div>
                <a
                  href={product.url}
                  target="_blank"
                  className={s.knowMore}
                  rel="noreferrer"
                >
                  Know More <i className="fas fa-arrow-right"></i>
                  <br />
                  <span className={s.desc}>{product.desc}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork;
