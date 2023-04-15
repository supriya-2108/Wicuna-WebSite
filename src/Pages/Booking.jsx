import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Styles/Button';
import { NavLink, useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSendData({ ...sendData, [e.target.name]: e.target.value });
  };

  const passInfo = async (event) => {
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
        alert(
          'Your appointment has been booked. Thank you for booking with us'
        );
        navigate('/');
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
          <label className="formLabel">
            <span className="formLabelSpan">Your Name:</span>
            <input
              type="text"
              name="name"
              value={sendData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="formLabel">
            <span className="formLabelSpan">Your Address:</span>
            <input
              type="text"
              name="address"
              value={sendData.address}
              onChange={handleChange}
              required
            />
          </label>
          <label className="formLabel">
            <span className="formLabelSpan">Mobile Number:</span>
            <input
              type="phone"
              name="mobile"
              value={sendData.mobile}
              onChange={handleChange}
              required
            />
          </label>
          <label className="formLabel">
            <span className="formLabelSpan"> Appointment Date:</span>
            <input
              type="date"
              name="date"
              value={sendData.date}
              onChange={handleChange}
              required
            />
          </label>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    width: 50%;
    height: 72vh;
    border: 1px solid ${({ theme }) => theme.colors.orange};
    padding-top: 1%;
  }

  .formData {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .formLabel {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4%;
  }

  .formLabelSpan {
    width: 200px;
    font-size: 1.5rem;
    text-align: initial;
  }

  .formLabel input {
    width: 200px;
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
    .formLabel {
      flex-direction: column;
    }
  }
`;

export default Booking;
