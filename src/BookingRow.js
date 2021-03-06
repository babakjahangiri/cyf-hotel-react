import React, { useState } from "react";
import moment from "moment";

function calcDeff(chkIn, chkOut) {
  return moment(chkOut, "YYYY-MM-DD").diff(moment(chkIn, "YYYY-MM-DD"), "days");
}

const BookingRow = ({ booking, handleShowProfile }) => {
  const [selected, setSelected] = useState(false);

  function selectRow() {
    setSelected(!selected);
  }

  return (
    <tr
      onClick={selectRow}
      className={selected === true ? "search-selected" : ""}
    >
      <th scope="row">{booking.id}</th>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>{calcDeff(booking.checkInDate, booking.checkOutDate) + " nights"}</td>
      <td>
        <button
          className="form-control btn btn-primary btn-block"
          onClick={e => {
            e.stopPropagation();
            handleShowProfile(booking.id);
          }}
        >
          Show Profile
        </button>
      </td>
    </tr>
  );
};

export default BookingRow;
