import { Resizable } from "re-resizable"
import { useState } from "react"
import './index.css';


const Resize = ({children, ...props}) => {

    const [size, setSize] = useState({
        width: props.size?.width || '100%', 
        height: props.size?.height ||'100%'
    });

    const isPercentageWidth = props.elementStyles?.size?.width?.units === "%";
    const isPercentageHeight = props.elementStyles?.size?.height?.units === "%";

    const wrapperStyle = {
        border: `${props.parent ? '1px solid' : '1px dashed' } grey`
    }

    const innerElementStyle = {
        width: isPercentageWidth ? '100%' : size.width,
        height: isPercentageHeight ? '100%' : size.height,
        display: 'flex',
        flexDirection: props.direction || 'initial',
    }

    const resizableHandleClasses = {
        top: 'top', 
        right: 'right', 
        bottom: 'bottom', 
        left: 'left',
        topLeft: 'topLeft',
        topRight: 'topRight',
        bottomLeft: 'bottomLeft',
        bottomRight: 'bottomRight',
    }

    const resizableHandleStyles = {
        top: {
            top: !props.parent ? '0' : '-5px',
        },
        right: {
            right: !props.parent ? '0' : '-5px',
        },
        bottom: {
            bottom: !props.parent ? '0' : '-5px',
        },
        left: {
            left: !props.parent ? '0' : '-5px',
        },
        topLeft: {
            left: !props.parent ? '0' : '-5px',
            top: !props.parent ? '0' : '-5px',
        },
        topRight: {
            right: !props.parent ? '0' : '-5px',
            top: !props.parent ? '0' : '-5px',
        },
        bottomLeft: {
            left: !props.parent ? '0' : '-5px',
            bottom: !props.parent ? '0' : '-5px',
        },
        bottomRight: {
            right: !props.parent ? '0' : '-5px',
            bottom: !props.parent ? '0' : '-5px',
        },
    }

    const saveSize = (e, direction, ref, d) => {
        setSize({width: ref.offsetWidth, height: ref.offsetHeight})
    }


    return (
        <Resizable 
            size={size} 
            style={wrapperStyle}
            bounds={'parent'} 
            onResizeStop={(e, direction, ref, d) => saveSize(e, direction, ref, d) }
            handleStyles={resizableHandleStyles}
            handleClasses={resizableHandleClasses}
        
        >
            <div style={innerElementStyle}>{children}</div>
        </Resizable>
    )
}

export default Resize;