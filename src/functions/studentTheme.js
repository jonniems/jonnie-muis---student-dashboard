const studentTheme = {
    axis: {
        style: {
            axis: {
                fill: 'transparent',
                stroke: '#ccc',
                strokeWidth: 1,
                strokeLinecap: 'round',
                strokeLinejoin: 'round'
            },
            axisLabel: {
                textAnchor: 'middle',
                fontFamily: 'Open Sans, sans-serif',
                fontSize: 12,
                letterSpacing: 'normal',
                padding: 0,
                fill: '#ccc',
                stroke: 'transparent',
                strokeWidth: 0
            },
            grid: {
                fill: 'none',
                stroke: 'none'
            },
            ticks: {
                fill: 'transparent',
                size: 5,
                stroke: '#ccc',
                strokeWidth: 1,
                strokeLinecap: 'round',
                strokeLinejoin: 'round'
            },
            tickLabels: {
                fontFamily: 'Open Sans, sans-serif',
                fontSize: 12,
                letterSpacing: 'normal',
                padding: 4,
                fill: '#666',
                stroke: 'transparent',
                strokeWidth: 0
            }
        },
        width: 1000,
        height: 400,
        padding: {left: 50, top: 20, right: 50, bottom: 180}
    },
    bar: {
        style: {
            data: {
                padding: 0,
                strokeWidth: 0
            },
            labels: {
                fontFamily: 'Open Sans, sans-serif',
                fontSize: 9,
                letterSpacing: 'normal',
                padding: 4,
                fill: '#666666',
                stroke: 'transparent',
                strokeWidth: 0
            }
        },
        width: 1000,
        height: 400,
        padding: {left: 50, top: 20, right: 50, bottom: 180}
    },
    chart: {
        width: 1000,
        height: 400,
        padding: {left: 50, top: 20, right: 50, bottom: 180}
    },
    group: {
        colorScale: [
            '#900C3F',
            '#FFC300'
        ],
        width: 1000,
        height: 400,
        padding: {left: 50, top: 20, right: 50, bottom: 180}
    },
    legend: {
        colorScale: [
            '#900C3F',
            '#FFC300'
        ],
        gutter: 10,
        orientation: 'vertical',
        titleOrientation: 'top',
        style: {
            data: {
                type: 'circle'
            },
            labels: {
                fontFamily: 'Open Sans, sans-serif',                
                fontSize: 12,
                letterSpacing: 'normal',
                padding: 8,
                fill: '#666666',
                stroke: 'transparent',
                strokeWidth: 0
            },
            title: {
                fontFamily: 'Open Sans, sans-serif',                
                fontSize: 12,
                letterSpacing: 'normal',
                padding: 5,
                fill: '#666666',
                stroke: 'transparent',
                strokeWidth: 0
            }
        }
    },
    line: {
        style: {
            data: {
                fill: 'transparent',
                opacity: 1,
                stroke: '#666666',
                strokeWidth: 3
            },
            labels: {
                fontFamily: 'Open Sans, sans-serif',
                fontSize: 12,
                letterSpacing: 'normal',
                padding: 4,
                fill: '#666666',
                stroke: 'transparent',
                strokeWidth: 0
            }
        },
        width: 350,
        height: 350,
        padding: 50
    },
    tooltip: {
        style: {
            fontFamily: 'Open Sans, sans-serif',
            fontSize: 12,
            letterSpacing: 'normal',
            padding: 5,
            fill: '#666666',
            stroke: 'transparent',
            strokeWidth: 0,
            pointerEvents: 'none'
        },
        flyoutStyle: {
            stroke: '#212121',
            strokeWidth: 1,
            fill: '#f0f0f0',
            pointerEvents: 'none'
        },
        cornerRadius: 5,
        pointerLength: 10
    }
}

export default studentTheme