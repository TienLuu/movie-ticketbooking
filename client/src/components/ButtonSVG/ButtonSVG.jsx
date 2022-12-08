// Import Library's Hook
import * as React from "react";
import ButtonUnstyled, {
   buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";

// Import Library's Component
import PropTypes from "prop-types";

const ButtonRoot = React.forwardRef(function ButtonRoot(props, ref) {
   const { children, ...other } = props;

   return (
      <svg width="120" height="40" {...other} ref={ref}>
         <path
            d="M4,0 h112 a4,4 0 0 1 4,4 v32 a4,4 0 0 1 -4,4 h-112 a4,4 0 0 1 -4,-4 v-32 a4,4 0 0 1 4,-4 z"
            className="bg"
         />
         <path
            d="M4,0 h112 a4,4 0 0 1 4,4 v32 a4,4 0 0 1 -4,4 h-112 a4,4 0 0 1 -4,-4 v-32 a4,4 0 0 1 4,-4 z"
            className="borderEffect"
         />
         <foreignObject x="0" y="0" width="120" height="40">
            <div className="content">{children}</div>
         </foreignObject>
      </svg>
   );
});

ButtonRoot.propTypes = {
   children: PropTypes.node,
};

const orange = {
   50: "#fff3e0",
   100: "#ffe0b2",
   200: "#ffcc80",
   400: "#ffa726",
   500: "#ff9800",
   600: "#fb8c00",
   800: "#ef6c00",
   900: "#e65100",
};

const CustomButtonRoot = styled(ButtonRoot)(
   ({ theme }) => `
  overflow: visible;
  cursor: pointer;
  --main-color: ${theme.palette.mode === "light" ? orange[600] : orange[100]};
  --hover-color: ${theme.palette.mode === "light" ? orange[50] : orange[900]};
  --active-color: ${theme.palette.mode === "light" ? orange[100] : orange[800]};

  & path {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
  }
  
  & .bg {
    stroke: var(--main-color);
    stroke-width: 1;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }

  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 2;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
  }

  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonUnstyledClasses.focusVisible} {
    outline:none
  }

  &.${buttonUnstyledClasses.active} { 
    & .bg {
      fill: var(--active-color);
      transition: fill 300ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-size: 0.875rem;
      font-family: IBM Plex Sans, sans-serif;
      font-weight: 500;
      line-height: 1.5;
      letter-spacing: 1px;
      height: 100%;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--main-color);
      text-transform: uppercase;
    }

    & svg {
      margin: 0 5px;
    }
  }`
);

const SvgButton = React.forwardRef(function SvgButton(props, ref) {
   return <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref} />;
});

export default function UnstyledButtonCustom() {
   return <SvgButton style={{ marginLeft: 16 }}>TICKET</SvgButton>;
}
