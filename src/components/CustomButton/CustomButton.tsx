import React, { FC } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import Button from "@material-ui/core/Button";
import { ButtonProps } from "@material-ui/core"

import styles from 'assets/jss/components/buttonStyles'

const useStyles = makeStyles(styles)

const CustomButton: FC<ButtonProps> = (props) => {

  const classes = useStyles();

  const { children, className, variant } = props;

  const classnames = clsx(
    classes.btn,
    className,
    {
      [classes.outline]: variant === 'outlined',
      [classes.text]: variant === 'text',
    }
  )

  return (
    <Button {...props} className={ classnames }>
      { children }
    </Button>    
  )
}

export default CustomButton
