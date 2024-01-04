const getTypeGradient = (type: string) => {
    const baseGradient = "linear-gradient(white 25%, ";
    const opacity = ", 0.7)";
  
    if (type.toLowerCase() === 'normal') {
      return { backgroundImage: baseGradient + "lightgray" + opacity };
    } else if (type.toLowerCase() === 'fighting') {
      return { backgroundImage: baseGradient + "#FAF3F0" + opacity };
    } else if (type.toLowerCase() === 'flying') {
      return { backgroundImage: baseGradient + "#F5F7F8" + opacity };
    } else if (type.toLowerCase() === 'poison') {
      return { backgroundImage: baseGradient + "#DEBACE" + opacity };
    } else if (type.toLowerCase() === 'ground') {
      return { backgroundImage: baseGradient + "#B3A492" + opacity };
    } else if (type.toLowerCase() === 'rock') {
      return { backgroundImage: baseGradient + "#DFD3C3" + opacity };
    } else if (type.toLowerCase() === 'bug') {
      return { backgroundImage: baseGradient + "#C4DFDF" + opacity };
    } else if (type.toLowerCase() === 'ghost') {
      return { backgroundImage: baseGradient + "#D0BFFF" + opacity };
    } else if (type.toLowerCase() === 'steel') {
      return { backgroundImage: baseGradient + "#FF5B22" + opacity };
    } else if (type.toLowerCase() === 'fire') {
      return { backgroundImage: baseGradient + "#FFB4B4" + opacity };
    } else if (type.toLowerCase() === 'water') {
      return { backgroundImage: baseGradient + "#B9F3FC" + opacity };
    } else if (type.toLowerCase() === 'grass') {
      return { backgroundImage: baseGradient + "#D0E7D2" + opacity };
    } else if (type.toLowerCase() === 'electric') {
      return { backgroundImage: baseGradient + "#FFFAD7" + opacity };
    } else if (type.toLowerCase() === 'psychic') {
      return { backgroundImage: baseGradient + "#ACB1D6" + opacity };
    } else if (type.toLowerCase() === 'ice') {
      return { backgroundImage: baseGradient + "#CDFCF6" + opacity };
    } else if (type.toLowerCase() === 'dragon') {
      return { backgroundImage: baseGradient + "#472183" + opacity };
    } else if (type.toLowerCase() === 'dark') {
      return { backgroundImage: baseGradient + "#434242" + opacity };
    } else if (type.toLowerCase() === 'fairy') {
      return { backgroundImage: baseGradient + "#F9B5D0" + opacity };
    }
  
    // Default if the type is not recognized
    return { backgroundImage: baseGradient + "lightgray" + opacity };
  };
  
  export default getTypeGradient;
  