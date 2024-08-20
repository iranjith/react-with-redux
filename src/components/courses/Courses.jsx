import { useState } from "react";

const Courses = () => {
  const [courseTitle, setCourseTitle] = useState({ course: { title: "" } });

  function handleChange(event) {
    setCourseTitle({ ...courseTitle, course: { title: event.target.value } });
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(courseTitle.course.title);
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

export default Courses;
