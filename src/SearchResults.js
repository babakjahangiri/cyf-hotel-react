import React from "react";
import "./css/Footer.css";
import FakeBookingData from "./data/fakeBookings.json";
import BookingRow from "./BookingRow";

const SearchResults = props => {
  return (
    <table className="table table-hover table-responsive-sm table-responsive-xs">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check-in</th>
          <th scope="col">Check-out</th>
          <th scope="col">Duration (nights)</th>
        </tr>
      </thead>
      <tbody>
        {FakeBookingData.map((booking, index) => {
          return (
            <BookingRow
              id={booking.id}
              title={booking.title}
              firstName={booking.firstName}
              surname={booking.surname}
              email={booking.email}
              roomId={booking.roomId}
              checkInDate={booking.checkInDate}
              checkOutDate={booking.checkOutDate}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;