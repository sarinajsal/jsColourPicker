const ColourDisplay =({rgb}) => {

    return(
        <h2 style={{"background-color": rgb}}>{rgb}</h2> //style set in line with double curly brakcets-just for ease 

    )

}

export default ColourDisplay;