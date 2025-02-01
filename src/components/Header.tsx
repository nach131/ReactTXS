import {type ReactNode} from "react";

type HeaderProps = {
	image: {
		src:string
		alt:string;
	}
children: ReactNode

}

export function Header({image, children} : HeaderProps ) {
  return (
  	<header>

	<img {...image} />
	{children}
  </header>
  )

}

export default Header;