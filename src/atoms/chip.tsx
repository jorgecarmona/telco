import React from 'react';
import MuiChip, {ChipProps as MuiChipProps} from '@mui/material/Chip';

export type ChipType =
  | 'pending'
  | 'open'
  | 'approved'
  | 'outlined'
  | 'denied'
  | 'default'
  | 'enabled'
  | 'disabled'
  | 'rejected';

interface ChipProps extends Omit<MuiChipProps, 'color' | 'onClick'> {
  label: string;
  onClick?: () => void;
  deletable?: boolean;
  type?: ChipType;
}

function Chip({
  label,
  onClick,
  type = 'default',
  deletable = false,
  ...rest
}: ChipProps) {
  const [showChip, setShowChip] = React.useState<boolean>(true);

  let color: 'primary' | 'secondary' | undefined = undefined;
  let variant: 'filled' | 'outlined' = 'filled';

  switch (type) {
    case 'pending':
    case 'approved':
      color = 'primary';
      break;
    case 'open':
    case 'denied':
      color = 'secondary';
      break;
    case 'enabled':
    case 'rejected':
    case 'disabled':
      color = 'primary';
      variant = 'outlined';
      break;
  }

  const handleDelete = () => {
    setShowChip(false);
  };

  return (
    <>
      {showChip && (
        <MuiChip
          className={type}
          color={color}
          label={label}
          onClick={onClick}
          onDelete={deletable ? handleDelete : undefined}
          variant={variant}
          {...rest}
        />
      )}
    </>
  );
}

export default Chip;
