import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const Bio = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', pt: 20 }}>
      <Card sx={{ width: '25%', display: 'flex', justifyContent: 'center' }}>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Ricky Brooks
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Short Bio Here About how amazing Ricky is at whatever Ricky Does
            goes here!!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' color='primary'>
            Share
          </Button>
          <Button size='small' color='primary'>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Bio;
