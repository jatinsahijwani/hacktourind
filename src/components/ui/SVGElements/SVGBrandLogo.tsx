import Image from 'next/image';
import { FC, forwardRef } from 'react';

interface Props {
	className?: string;
	ref?: any;
}
// eslint-disable-next-line react/display-name
const SVGBrandLogo: FC<Props> = forwardRef((props, ref: any) => (
	<Image src={'/logohtihti.png'} alt='Logo' height={75} width={250} />
));

export default SVGBrandLogo;
