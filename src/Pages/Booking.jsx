import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Styles/Button';
import { NavLink } from 'react-router-dom';
import { Divider } from 'antd';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Database/firebase';

const Booking = () => {
  const [sendData, setSendData] = useState({
    name: '',
    address: '',
    mobile: '',
    date: '',
  });

  const handleChange = (e) => {
    setSendData({ ...sendData, [e.target.name]: e.target.value });
  };

  const passInfo = async (event) => {
    // 👇 Get input value from "event"
    event.preventDefault();
    if (
      sendData.name != '' &&
      sendData.date != '' &&
      sendData.address != '' &&
      sendData.mobile != ''
    ) {
      const data = {
        name: sendData.name,
        address: sendData.address,
        mobilenum: sendData.mobile,
        date: sendData.date,
      };
      try {
        const docRef = await addDoc(collection(db, 'Booking Details'), {
          bookingDetails: data,
        });
        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    } else alert('enter values');
  };

  return (
    <BookingSection>
      <div className="details">
        <h2>Book Your Appointment Today</h2>
        <p className="details-sub-heading">
          You can visit our store nearby your location
          <Divider style={{ color: 'black', border: 50 }}>
            <span className="text-sm font-normal text-textColor-skin-secondary">
              or
            </span>
          </Divider>
          We can also pick your fabrics from your home and our expert will visit
          to take your measurements at a nominal cost of 300Rs (If your location
          is in the range of 10km from us).
        </p>
      </div>

      <div className="bookingForm">
        <form className="formData">
          <span>( Fill This Form To book Your Appointment )</span>
          <br />
          <br />
          <label>
            Your name:
            <input
              type="text"
              name="name"
              value={sendData.name}
              onChange={handleChange}
              required="true"
            />
          </label>
          <br />
          <label>
            Your Address:
            <input
              type="text"
              name="address"
              value={sendData.address}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Your Mobile Number:
            <input
              type="text"
              name="mobile"
              value={sendData.mobile}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Select Appointment Date:
            <input
              type="date"
              name="date"
              value={sendData.date}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <br />
          <Button className="btn hire-me-btn" onClick={passInfo}>
            <NavLink to="/booking">SAVE YOUR INFORMATION</NavLink>
          </Button>
        </form>
      </div>
    </BookingSection>
  );
};

const BookingSection = styled.section`
  text-align: center;
  .details {
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      margin: 3%;
      font-size: 2rem;
      font-weight: bold;
    }
  }

  .details-sub-heading {
    width: 50%;
  }

  .bookingForm {
    width: 50vw;
    height: 72vh;
    border: 1px solid ${({ theme }) => theme.colors.orange};
    margin-left: 25%;
    padding-top: 1%;

    label {
      font-size: 1.5rem;
      font-weight: bold;
    }
    input {
      margin-bottom: 5%;
      margin-left: 5rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    input {
      margin-left: 0;
      height: 3rem;
    }
    .formData {
      padding: 0;
    }
    .bookingForm {
      height: 55vh;
    }
  }
`;

export default Booking;
