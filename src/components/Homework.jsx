import React from "react";

const Homework = ({ homework }) => {
  return (
    <div className="grid grid-cols-2  justify-center items-center gap-5 py-5">
      {homework.map((x, i) => (
        <p className="font-bold text-xl text-center uppercase" key={i}>
          {x}
        </p>
      ))}
    </div>
  );
};

export default Homework;
