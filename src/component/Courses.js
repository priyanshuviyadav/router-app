import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Course() {
  const courseArr = [
    {
      name: "javascript",
      id: 1,
    },
    {
      name: "html",
      id: 2,
    },
    {
      name: "react",
      id: 3,
    },
    {
      name: "DOM",
      id: 4,
    },
  ];

  return (
    <>
      <div>Course</div>
      {courseArr.map((course) => {
        const { name, id } = course;
        return (
          <Link to={`${name}`}>
            <div
              style={{
                // margin: "2px 0",
                // padding: "5px 8px",
                border: "2px  gray",
                color: "green",

                margin: "2px auto",
                padding: "4px auto",
              }}
              key={id}
            >
              <h3>{name}</h3>
            </div>
          </Link>
        );
      })}
      <Outlet />
    </>
  );
}
