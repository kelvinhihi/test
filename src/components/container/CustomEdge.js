import React from 'react'
import { getBezierPath } from 'react-flow-renderer'

function CustomEdge(
    {
        id,
        sourceX,
        sourceY,
        targetX,
        targetY,
        sourcePosition,
        targetPosition,
        style = {},
        data,
        markerEnd,
    }
){
    const edgePath = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });
    return (
        <>
            <path
                id={id}
                style={style}
                className='react-flow__edge-path'
                d={edgePath}
                markerEnd={markerEnd}
            />
            <text>
                <textPath
                    href={`#${id}`}
                    style={{
                        fontSize:"12px"
                    }}
                    startOffset="50%"
                    textAnchor='middle'
                >
                    something
                </textPath>
            </text>
        </>
    )
}

export default CustomEdge