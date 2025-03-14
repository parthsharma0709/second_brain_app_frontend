export interface IconProps {
    size:"sm" | "md"|"lg"
}

// eslint-disable-next-line react-refresh/only-export-components
export const iconsSizeVariant:Record<string,string> ={
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-8 h-8"
}

export const PlusIcon = (props:IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className= {iconsSizeVariant[props.size]}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
    );
};
