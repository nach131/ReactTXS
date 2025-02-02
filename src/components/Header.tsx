// import {type ReactNode} from "react";

// type HeaderProps = {
// 	image: {
// 		src:string
// 		alt:string;
// 	}
// children: ReactNode

// }

// export function Header({image, children} : HeaderProps ) {
//   return (
//   	<header>

// 	<img {...image} />
// 	{children}
//   </header>
//   )

// }

// export default Header;
// ================
import React from "react";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement>{}

export function Header({ children, ...props }: Props) {
	return(
	<header>
		<img {...props} />
		{children}
	</header>
	)
}

export default Header;