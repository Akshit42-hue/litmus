import React, { useEffect } from 'react';
import { Typography, Avatar } from '@material-ui/core';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import CancelSharpIcon from '@material-ui/icons/CancelSharp';
import useStyles from './styles';

interface StatusProps {
  status: string;
}

const ExperimentStatus: React.FC<StatusProps> = ({ status }) => {
  const classes = useStyles();
  const [label, setLabel] = React.useState(' ');

  useEffect(() => {
    if (status === 'Passed') {
      return setLabel(classes.passed);
    }
    return setLabel(classes.failed);
  }, [status]);

  return (
    <>
      <div className={`${label} ${classes.state}`}>
        {status === 'Passed' ? (
          <Avatar className={classes.miniIcons}>
            <CheckCircleSharpIcon
              className={`${classes.checkIcon} ${classes.stateIcon}`}
            />
          </Avatar>
        ) : (
          <Avatar className={classes.miniIcons}>
            <CancelSharpIcon
              className={`${classes.cancelIcon} ${classes.stateIcon}`}
            />
          </Avatar>
        )}
        <Typography className={classes.statusFont}>{status}</Typography>
      </div>
    </>
  );
};
export default ExperimentStatus;
