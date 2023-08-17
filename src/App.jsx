import "./styles/App.css";
import General from "./components/general-info";
import streetPhoto from "./assets/street-photo.jpg";
import Education from "./components/education-info";
import Practical from "./components/practical-info";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    gender: "Male",
    school: "",
    titleStudy: "",
    graduation: "",
    plan: "No",
    company: "",
    position: "",
    from: "",
    to: ""
  })

  const [tableData, setTableData] = useState([])

  const handleChange = (e) => {
    const {name, value} = e.target
    setData((prevData) => ({...prevData, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTableData((prevDataTable) => [...prevDataTable, data])
    setData({
      name: "",
      email: "",
      phone: "",
      dob: "",
      address: "",
      gender: "",
      schoollkajldkfjlksjl: "",
      titleStudy: "",
      graduation: "",
      plan: "",
      company: "",
      position: "",
      from: "",
      to: ""
    })
  }

  return (
    <div id="every-element">
      <div id="all-elements">
        <div className="photo">
          <img src={streetPhoto} className="street-photo" />
          <p className="text-on-image">
            Photo by <a href="https://unsplash.com/@leronep">Lerone Pieters</a> on{" "}
            <a href="https://unsplash.com">Unsplash</a>
          </p>
        </div>
        <form id="all-forms" onSubmit={handleSubmit}>
          <h1>C.V.</h1>
          <div className="elements">
            <General dict={data} changable={handleChange}/>
            <Education dict={data} changable={handleChange}/>
            <Practical dict={data} changable={handleChange}/>
          </div>
          <button id="submit-btn" type="submit">Submit</button>
        </form>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>DOB</th>
            <th>Address</th>
            <th>Gender</th>
            <th>School</th>
            <th>Title of Study</th>
            <th>Graduation</th>
            <th>Plan to study further?</th>
            <th>Company worked for</th>
            <th>Position</th>
            <th>Worked from</th>
            <th>Worked to</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.dob}</td>
              <td>{data.address}</td>
              <td>{data.gender}</td>
              <td>{data.school}</td>
              <td>{data.titleStudy}</td>
              <td>{data.graduation}</td>
              <td>{data.plan}</td>
              <td>{data.company}</td>
              <td>{data.position}</td>
              <td>{data.from}</td>
              <td>{data.to}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
