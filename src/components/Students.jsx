// components/Students.jsx

function Students(props) {
    return (
        <div className="students">
            <h1>Students</h1>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Course: {props.course}</p>
        </div>
    );
}


export default Students;