import React from 'react';
import {
  Card as MuiCard,
  CardActions,
  CardContent,
  CardHeader,
} from '@mui/material';

interface CardProps {
  bgColor?: string;
  borderColor?: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode | string;
}

function Card({
  bgColor = '#ffffff',
  borderColor = '#EAECF0',
  content,
  header,
  footer,
}: CardProps) {
  let newHeader = header;

  if (typeof header === 'string') {
    newHeader = <CardHeader title={header} />;
  }

  return (
    <>
      <MuiCard
        variant="outlined"
        sx={{backgroundColor: `${bgColor}`, borderColor: `${borderColor}`}}
      >
        {newHeader}
        <CardContent>{content}</CardContent>
        {footer && <CardActions>{footer}</CardActions>}
      </MuiCard>
    </>
  );
}

export default Card;
