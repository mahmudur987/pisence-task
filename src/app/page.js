"use client";
import Attendence from "@/components/Attendence";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import img1 from "@/assets/image1.png";
import img2 from "@/assets/image2.png";
import img3 from "@/assets/image3.png";
import Image from "next/image";

const Home = () => {
  const [student, setstudent] = useState(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        const data = await response.json();
        setstudent(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="container mx-auto">
      {/* navbar */}

      <Navbar show={show} setShow={setShow} />

      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}

          <h1 className="text-xl font-semibold my-10">
            HELLO! {student?.NAME}{" "}
          </h1>

          {student && <Attendence student={student} />}
        </div>

        <div onClick={() => setShow(!show)} className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu top-10 p-4 w-96 min-h-full mt-16 bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <p className="my-2 text-2xl font-bold">
                <span>
                  <IoHomeOutline />
                </span>
                <span>Summary Dashboard</span>
              </p>
            </li>
            <li>
              <p className="my-2 text-2xl font-bold">
                <Image src={img1} height={20} width={25} />
                <span>Attendance Tracking</span>
              </p>
            </li>
            <li>
              <p className="my-2 text-2xl font-bold">
                <Image src={img2} height={20} width={25} />
                <span>Behavioral Analytics</span>
              </p>
            </li>
            <li>
              <p className="my-2 text-2xl font-bold">
                <Image src={img3} height={20} width={25} />
                <span>Academic Performance Tracking</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Home;
