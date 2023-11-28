import React from 'react';
import { LinearProgress, Typography, Tooltip } from '@mui/material';

const ProgressBar = ({name, progress}) => {
  const lessonsProgress = progress; // Ben's lessons progress in percentage

  return (
    <div>
      <Typography variant="h6">{name} Progress:</Typography>
      <Tooltip title={`${lessonsProgress}% completed`} placement="top">
        <LinearProgress
          variant="determinate"
          value={lessonsProgress}
          sx={{ width: '100%', height: '10px' }}
        />
      </Tooltip>
    </div>
  );
};

export default ProgressBar;
