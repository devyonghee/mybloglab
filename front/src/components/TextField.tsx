import React from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { grey } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/styles';

const MyTextField: React.ComponentType<TextFieldProps> = withStyles({
  root: {
    '& .MuiInput-underline:after': {
      borderBottomColor: grey[500],
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: grey[700],
      },
      '&:hover fieldset': {
        borderColor: grey[400],
      },
      '&.Mui-focused fieldset': {
        borderColor: grey[600],
      },
    },
  },
})(TextField);

export default MyTextField;