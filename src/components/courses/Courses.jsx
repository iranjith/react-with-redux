import { useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseAction";
import PropTypes from "prop-types";

const Courses = () => {
  const [courseTitle, setCourseTitle] = useState({ course: { title: "" } });

  function handleChange(event) {
    setCourseTitle({ ...courseTitle, course: { title: event.target.value } });
  }

  function handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(courseActions.createCourse(courseTitle.course));
    //alert(courseTitle.course.title);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={handleChange}
          value={courseTitle.course.title}
        />
        <input type="submit" value="Save" />
      </form>
    </>
  );
};

Courses.PropTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.course,
  };
}

const connectedStateAndProps = connect(mapStateToProps);
export default connectedStateAndProps(Courses);
