import React from "react";
import FocusTimer from "../../operations/focus_singleton";

export function FocusButton(props: {className: string, onClick: () => void, text: string, children?: any, autofocus?: boolean, onFocus?: () => void}) {
    
    return <button 
            className={props.className} 
            autoFocus={props.autofocus}
            onMouseMove={ e => e.currentTarget.focus() }
            onMouseEnter={ e => e.currentTarget.focus() }
            onMouseLeave={e => e.currentTarget.blur() }
            onBlur={e => {
                // if it hasn't been long enough since
                // the last focus transition, refocus
                // on the existing focused component.
                if (!FocusTimer.request()) {
                    e.currentTarget.focus();
                }
            }}
            onFocus={() => {
                if (props.onFocus) {
                    props.onFocus();
                }
            }}
            onClick={props.onClick}
        >
            {props.text}
            {props.children}
        </button>
}

//export const FocusButton = React.memo(FocusButtonInner);