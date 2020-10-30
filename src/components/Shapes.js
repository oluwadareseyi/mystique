import React, { useState, useEffect } from "react";
import Shape from "./Shape";

const shapeName = [
  "select a shape",
  "square",
  "triangle",
  "trapezium",
  "parallelogram",
  "circle",
  "rhombus",
  "pentagon",
  "star",
  "hexagon",
  "octagon",
  "decagon",
];

const initialState = {
  name: shapeName[0],
  size: "100",
  color: "#fd6808",
};

const usePersistState = (key, initialVal) => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) || initialVal
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

const blockInvalidChar = (e) =>
  ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

const Shapes = () => {
  const [shapes, setShapes] = usePersistState("shapes", [initialState]);
  const [shapeNumber, setShapeNumber] = usePersistState("number", 1);

  const { name, size, color } = shapes[shapeNumber - 1];

  const onChange = (e) => {
    const index = shapeNumber - 1;
    const newShapes = shapes.map((shape, i) => {
      if (i === index) {
        const { name, value } = e.target;
        return {
          ...shape,
          [name]: value,
        };
      } else {
        return shape;
      }
    });
    setShapes(newShapes);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (shapes[shapeNumber - 1].name !== "select a shape") {
      setShapeNumber((shape) => shape + 1);
    }
    setShapes((shapes) => {
      if (shapes[shapeNumber - 1].name !== "select a shape") {
        return [...shapes, initialState];
      } else {
        return shapes;
      }
    });
  };

  return (
    <div className="shapes-con">
      <section className="shape-grid">
        {shapes &&
          shapes.map(({ name, size, color }, i) => (
            <div className=".shape-con" key={i}>
              <Shape name={name} size={size} color={color} />
            </div>
          ))}
      </section>
      <section className="form-con">
        <div className="title">Create your shapes below</div>
        <form onSubmit={submitForm}>
          <div className="row">
            <div className="row-item">
              <label htmlFor="name">Shape</label>
              <select
                onChange={onChange}
                value={name}
                name="name"
                id="color-name"
              >
                {shapeName.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className="row-item">
              <label htmlFor="size">Shape size</label>
              <input
                type="number"
                name="size"
                value={size}
                onChange={onChange}
                onKeyDown={blockInvalidChar}
              />
            </div>
          </div>
          <label htmlFor="color">Choose Color</label>
          <input
            type="color"
            name="color"
            id="color"
            value={color}
            onChange={onChange}
          />
          <button type="submit">Add Shape</button>
        </form>
      </section>
    </div>
  );
};

export default Shapes;
