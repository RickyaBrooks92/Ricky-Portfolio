import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const Experience = () => {
  return (
    <Box
      sx={{
        display: 'flex',

        pt: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
        id='experience'
        sx={{
          width: '25%',
          display: 'flex',
          justifyContent: 'center',
          border: 1,
        }}
      >
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Experience & Projects!
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Short Bio Here About how amazing Ricky is at whatever Ricky Does
            goes here!!
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <Typography component='div'>
          Rickys StackAThon Projects <br />
          Time: 48 hours <br />
          Stack: React, React Context, Express, Node.js, Material UI,
          Javascript.
        </Typography>
      </Card>
    </Box>
  );
};

export default Experience;
