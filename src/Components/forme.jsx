import React, { useState } from "react";
import "./Forme.css";

const Forme = ({ students }) => {
  const [pupils, setPupils] = useState(students);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [color, setColor] = useState("#000000");
  const [year, setYear] = useState("1990");

  const handleAddStudent = () => {
    setPupils([
      ...pupils,
      { id: crypto.randomUUID(), firstname, lastname, year, color },
    ]);
  };

  return (
    <div>
      <label htmlFor="firstname">Name</label>
      <input
        placeholder="First name"
        type="text"
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label htmlFor="lastname">Last name</label>
      <input
        placeholder="Last name"
        type="text"
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label htmlFor="year">Year of birth</label>
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <label htmlFor="color">Favorite color</label>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={handleAddStudent}>Add a student</button>

      <div className="list">
        <ul className="content">
          {pupils.map((student) => (
            <li key={student.id}>
              Name: {student.firstname} {student.lastname}, Year of Birth:{" "}
              {student.year}
              <span
                style={{
                  marginLeft: "10px",
                  backgroundColor: student.color,
                  padding: "5px",
                  borderRadius: "3px",
                }}
              >
                Favorite Color
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Forme;
