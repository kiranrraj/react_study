import Part from './Part'

const Content = (props) => {
    return (
        <div>
            <Part part={props.parts[0].partName} exercises={props.parts[0].partExercises} />
            <Part part={props.parts[1].partName} exercises={props.parts[1].partExercises} />
            <Part part={props.parts[2].partName} exercises={props.parts[2].partExercises} />
        </div>
    )
}

export default Content;