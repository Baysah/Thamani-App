import React from 'react';
import { Grid } from '@mui/material';
import InputField from '../FormsUI/TextField/index';
import DateTimeField from '../FormsUI/DateTimePicker/index';
import CheckBox from '../FormsUI/Checkbox/index';

const FormThree = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <DateTimeField name="checkInDate" label="Checkin Date" />
        </Grid>
        <Grid item xs={6}>
          <DateTimeField name="checkOutDate" label="Checkout Date" />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name="message"
            label="Message"
            multiline={true}
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <CheckBox
            name="termsOfService"
            legend="Terms of Service"
            label="I agree to the terms and conditions"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default FormThree;
