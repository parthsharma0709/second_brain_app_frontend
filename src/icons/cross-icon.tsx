export interface IconProps {
    size:"sm" | "md"|"lg"
}

// eslint-disable-next-line react-refresh/only-export-components
export const iconsSizeVariant:Record<string,string> ={
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-8 h-8"
}

export function CrossIcon(props:IconProps){
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className={`cursor-pointer stroke-slate-950 ${iconsSizeVariant[props.size]}`}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>


        </div>
    )
}