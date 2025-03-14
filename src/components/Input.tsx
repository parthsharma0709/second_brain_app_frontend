
// interface InputProps{
//     placeholder:string;
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     ref?:any;
// }


// export function Input(props:InputProps) {
//     return (
//       <div>
//         <input ref={props.ref} type="text" placeholder={props.placeholder} className="px-4 py-2 border-2 rounded m-2" />
//       </div>
//     );
//   }


//////////////////////////////////////////

import  { forwardRef } from "react";

interface InputProps {
  placeholder: string;
}

// ✅ Correctly forwarding the ref
export const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder }, ref) => {
  return (
    <div>
      <input ref={ref} type="text" placeholder={placeholder} className="px-4 py-2 border-2 rounded m-2" />
    </div>
  );
});

