const elementStyles1 = { 
    size: { 
        width: { 
            value: 80, units: '%'
        }, 
        height: { 
            value: 160, units: 'px' 
        }
    }
}

const elementStyles2 = { 
    size: { 
        width: { 
            value: 33.33, units: '%'
        }, 
        height: { 
            // value: 100, units: 'px' 
        }
    }
}

const elementStyles3 = { 
    size: { 
        width: { 
            // value: 33.33, units: '%'
        }, 
        height: { 
            value: 33.33, units: '%' 
        }
    }
}


const styles1 = { 
    width: `${elementStyles1.size?.width?.value}${elementStyles1.size?.width?.units}`,
    height: `${elementStyles1.size?.height?.value}${elementStyles1.size?.height?.units}`,
}
  
const styles2 = { 
    width: `${elementStyles2.size?.width?.value}${elementStyles2.size?.width?.units}`,
    height: `${elementStyles2.size?.height?.value}${elementStyles2.size?.height?.units}`,
}

const styles3 = { 
    width: `${elementStyles3.size?.width?.value}${elementStyles3.size?.width?.units}`,
    height: `${elementStyles3.size?.height?.value}${elementStyles3.size?.height?.units}`,
}


export { 
    elementStyles1, 
    elementStyles2, 
    elementStyles3,
    styles1, 
    styles2,
    styles3,
 };


