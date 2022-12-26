import React, { useState, useEffect } from "react";
import './driver.css'


function Driver() {
  const [driver, setDriver] = useState([]);
  useEffect(() => {
    fetch("http://ergast.com/api/f1/drivers.json?limit=30&offset=30")
      .then((res) => res.json())
      .then((data) => {
        setDriver(data.MRData.DriverTable.Drivers);
      });
  }, []);
  return (
    <>
      <header></header>
      <table>
        <thead>
          <tr>
            <th>Driver Name</th>
            <th> Permanent Number</th>
            <th>Nationality</th>
            <th>DOB</th>
            <th>Information</th>
          </tr>
        </thead>
        <tbody>
          {driver.map((data) => {
            return (
              <tr key={data.driverId}>
                <td>{data?.givenName}</td>
                <td>
                  {data.permanent}
                </td>
                <td>{data.nationality}</td>
                <td>{data.dateOfBirth}</td>
                <td>
                  <a href={data.url} target="_blank">
                    Biography
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Driver;
