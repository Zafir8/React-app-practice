import PropTypes from 'prop-types';

// components/Students.jsx

function Students(props) {
    return (
        <div className="students">
            <h1>Students</h1>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Course: {props.course}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Students.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    course: PropTypes.string.isRequired,
};

Students.defaultProps = {
    name: "John Doe",
    age: 20,
    course: "React",
    isStudent: false,
};

export default Students;