import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Parallax } from 'react-parallax';
import useStyles from './subscribe-style';
import Title from '../Title';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SubscribeForm() {
  const { classes } = useStyles();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true); // Set loading state to true
    try {
      await axios.post('/api/sendEmail', formData);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
      });
      toast.success('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again later.');
    }
    setLoading(false);
  }

  return (
    <div>
      <ToastContainer />
      <div className={classes.root}>
        <Parallax strength={300}>
          <div className={classes.parallaxWrap} />
        </Parallax>
        <Container fixed>
          <Paper className={classes.form}>
            <Title
              head='Contact Us'
              align="center"
              color="primary"
            />
            <form onSubmit={handleSubmit}>
              <TextField
                className={classes.field}
                variant="filled"
                sx={{ width: { xs: '15rem', sm: '28rem', md: '13.5rem', lg: '15rem' } }}
                label={"Firstname"}
                placeholder={"Enter first name"}
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
                required
              />
              <TextField
                className={classes.field}
                variant="filled"
                sx={{ width: { xs: '15rem', sm: '28rem', md: '13.5rem', lg: '15rem' } }}
                label={"Lastname"}
                placeholder={"Enter second name"}
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
                required
              />
              <TextField
                className={classes.field}
                variant="filled"
                sx={{ width: { xs: '15rem', sm: '28rem', md: '13.5rem', lg: '15rem' } }}
                label={"Email"}
                placeholder={"Enter Email"}
                name="email"
                onChange={handleChange}
                value={formData.email}
                required
              />
              <TextField
                className={classes.field}
                sx={{ width: { xs: '15rem', sm: '28rem', md: '13.5rem', lg: '15rem' } }}
                label='Phone Number'
                placeholder={"Phone Number"}
                variant="filled"
                name='phoneNumber'
                onChange={handleChange}
                value={formData.phoneNumber}
                required
              />
              <TextField
                className={classes.field}
                variant="filled"
                sx={{ width: { xs: '15rem', sm: '28rem', md: '28rem', lg: '31.5rem' } }}
                multiline
                rows={4}
                label={"Message"}
                placeholder={"Enter Your Message"}
                name="message"
                onChange={handleChange}
                value={formData.message}
                required
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </Paper>
        </Container>
      </div>
    </div>
  );
}

export default SubscribeForm;
