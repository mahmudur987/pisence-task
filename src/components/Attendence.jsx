import React from "react";
import Homework from "./Homework";
import BehavioralAnalytics from "./BehavioralAnalytics";

const Attendence = ({ student }) => {
  const days = Object.keys(student.ATTENDANCE);
  const attendanceData = Object.values(student.ATTENDANCE);
  return (
    <main className="flex flex-col gap-10 mb-10">
      <section>
        <h2 className="text-2xl font-semibold tracking-widest my-5 text-center">
          Attendance
        </h2>
        <div className="overflow-hidden  ">
          <div className="mb-4 p-2 bg-base-300 rounded-lg">
            <table className="w-full text-center ">
              <tbody>
                <tr>
                  <td></td>
                  {days.map((day) => (
                    <td className="text-xl tracking-wider font-bold" key={day}>
                      {day}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td></td>
                  {attendanceData.map((attendance) => (
                    <td className="text-sm" key={attendance.date}>
                      {attendance.date}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="font-bold">FN</td>
                  {attendanceData.map((attendance) => (
                    <td key={attendance.date}>
                      <div className="flex justify-center my-5">
                        {attendance?.fn === "present" && (
                          <p className="bg-[#10A41E] w-10 h-10"></p>
                        )}
                        {attendance?.fn === "absent" && (
                          <p className="bg-[#B8100F] w-10 h-10"></p>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="font-bold">AN</td>
                  {attendanceData.map((attendance) => (
                    <td key={attendance.date}>
                      <div className="flex justify-center">
                        {attendance?.an === "present" && (
                          <p className="bg-[#10A41E] w-10 h-10"></p>
                        )}
                        {attendance?.an === "absent" && (
                          <p className="bg-[#B8100F] w-10 h-10"></p>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="lg:flex justify-between  gap-5">
        <div className="lg:w-1/2 bg-base-300 rounded-lg">
          <h1 className="text-lg font-semibold text-center my-5">Homeworks </h1>

          {student?.homework && <Homework homework={student.homework} />}
        </div>
        <div className="lg:w-1/2 bg-base-300 rounded-lg">
          <h1 className="text-lg font-semibold text-center my-5">
            Behavioral Analytics{" "}
          </h1>

          {student.BehavioralAnalytics && (
            <BehavioralAnalytics data={student.BehavioralAnalytics} />
          )}
        </div>
      </section>
    </main>
  );
};

export default Attendence;
