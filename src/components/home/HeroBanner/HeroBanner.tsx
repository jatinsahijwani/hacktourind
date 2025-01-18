import { SVGBrandLogo } from "@components/ui/SVGElements";
import Image from "next/image";
import { FC } from "react";
import s from "./HeroBanner.module.scss";

const HeroBanner: FC = () => {
  // useEffect(() => {
  // 	document.body.classList.add('page-loaded');
  // }, []);
  return (
    <div className={`${s.container}`}>
      <div className={s.items}>
        <div className={s.item}>
        <SVGBrandLogo className={s.logo} />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;