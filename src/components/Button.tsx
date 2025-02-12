import { type ComponentPropsWithoutRef } from 'react';

// type ButtonProps = {
//   el: 'button';
// } & ComponentPropsWithoutRef<'button'>;

// type AnchorProps = {
//   el: 'anchor';
// } & ComponentPropsWithoutRef<'a'>;

// export default function Button(props: ButtonProps | AnchorProps) {
//   if (props.el === 'anchor') {
//     return <a className="button" {...props}></a>;
//   }
//   return <button className="button" {...props}></button>;
// }


// LO mismo que arriba, pero no funciona para las props de botones
type ButtonProps = ComponentPropsWithoutRef<'button'>;

type AnchorProps = ComponentPropsWithoutRef<'a'>;

function IsAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return 'href' in props;
}

export default function Button(props: ButtonProps | AnchorProps) {
  if (IsAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }
  return <button className="button" {...props}></button>;
}
