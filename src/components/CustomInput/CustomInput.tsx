import React, { FC } from 'react'
import clsx from 'clsx'
import { makeStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { InputProps } from "@material-ui/core"
import Box from '@material-ui/core/Box'

import styles from 'assets/jss/components/inputStyles'

const useStyles = makeStyles(styles);

interface Props {
  labelText?: string;
  id?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  helperText?: string;
  className?: string;
  fullWidth?: boolean;
  placeholder?: string;
  disabled?: boolean;
  inputProps?: InputProps;
  error?: boolean;
  value?: string | number;
  success?: boolean;
  endAdornment?: React.ReactNode,
  caracteres?: number;
}

const CustomInput: FC<Props> = (props) => {

  const classes = useStyles();

  const {
    labelText,
    error,
    id,
    onChange,
    name,
    helperText,
    className,
    fullWidth,
    placeholder,
    disabled,
    inputProps,
    value,
    success,
    endAdornment,
    caracteres
  } = props;

  return (
    <FormControl fullWidth={fullWidth} className={clsx(className, classes.textField)} disabled={disabled}>
      {
        labelText &&
        <Box mb={1} display='flex' justifyContent='space-between'>
          <label className={clsx(classes.label, { [classes.disabledLabel]: disabled })}>
            {labelText}
          </label>
          {
            caracteres && (
              <label className={clsx(classes.label, classes.subLabel, {[classes.dangerLabel]: caracteres < 0})}>
                {`${caracteres} caracteres`}
              </label>
            )
          }
        </Box>
      }

      <OutlinedInput
        onChange={onChange}
        id={id}
        name={name}
        placeholder={placeholder}
        {...inputProps}
        error={error}
        value={value}
        autoComplete='off'
        endAdornment={endAdornment}
      />
      {
        !!helperText && (
          <FormHelperText id={id + "-text"} className={clsx({ [classes.error]: error, [classes.success]: success })}>
            {helperText}
          </FormHelperText>
        )
      }
    </FormControl>
  )
}

export default CustomInput
