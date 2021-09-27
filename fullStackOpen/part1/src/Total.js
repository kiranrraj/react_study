const Total = (props) =>{
    return (
        <p>Number of exercises {props.parts[0].partExercises + props.parts[1].partExercises + props.parts[2].partExercises}</p>
    )
} 

export default Total;