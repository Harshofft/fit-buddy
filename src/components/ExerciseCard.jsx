import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import Back from "./../assets/images/Gemini_Generated_Image_z1zrj2z1zrj2z1zr.png"
import Chest from "./../assets/images/chest.jpg"
import Cardio from "./../assets/images/cardio.jpg"
import Lower_arms from "./../assets/images/lowerarms.jpg"
import Lower_legs from "./../assets/images/lowerlegs.jpg"
import Neck from "./../assets/images/neck.jpg"
import Shoulder from "./../assets/images/shoulder.jpg"
import Upper_arms from "./../assets/images/upperarms.jpg"
import Upper_legs from "./../assets/images/upperlegs.jpg"
import Waist from "./../assets/images/waist.jpg"
const ExerciseCard = ({ exercise }) => (
    
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.bodyPart=="back"?Back:exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row">
      <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
