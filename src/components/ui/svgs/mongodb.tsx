import type { SVGProps } from "react";

const MongoDB = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        viewBox="0 0 32 32"
        preserveAspectRatio="xMidYMid"
    >
        <path
            fill="#589636"
            d="M15.821.09S6.386 9.408 6.386 19.556a9.435 9.435 0 0 0 9.435 9.435 9.435 9.435 0 0 0 9.435-9.435C25.256 9.408 15.821.09 15.821.09z"
        />
        <path
            fill="#6cac48"
            d="M16.58 27.99s-.256-10.87-.256-14.788c0-.47-.29-.6-.555-.6s-.555.128-.555.6c0 3.918-.256 14.788-.256 14.788z"
        />
        <path
            fill="#c2bfbf"
            d="M15.821 31.91v-3.92l.534.154.545-.154v3.92l-.545.09z"
        />
    </svg>
);

export { MongoDB };