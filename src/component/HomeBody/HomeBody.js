import React, { useEffect, useState } from 'react';
import { Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Body from '../Body/Body';

const HomeBody = () => {
    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('./bodyCourse.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
        return (
        <div className="shop-container  p-5">
            <Row xs={1} md={2} className="g-4">
                {
                    courses.map(course => <Body
                        key = {course.key}
                        course = {course}
                    ></Body>)
                }
            </Row>
            <NavLink to="/services">
                <button className="p-2 rounded mt-4 bg-dark text-white">More Courses</button>
            </NavLink>
        </div>
    );
};

export default HomeBody;