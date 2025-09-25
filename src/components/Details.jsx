import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
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
const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={bodyPart=="back"?Back:bodyPart=="chest"?Chest:bodyPart=="cardio"?Cardio:bodyPart=="lower arms"?Lower_arms:bodyPart=="lower legs"?Lower_legs:bodyPart=="neck"?Neck:bodyPart=="shoulders"?Shoulder:bodyPart=="upper arms"?Upper_arms:bodyPart=="upper legs"?Upper_legs:bodyPart=="waist"?Waist:gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
