import {Badge, Icon as MuiIcon, IconProps as MuiIconProps} from '@mui/material';
import {iconLookup, IconType} from './icon-store';

interface IconProps extends MuiIconProps {
  bgColor?: string;
  customColor?: string;
  hasNotifications?: boolean;
  name: IconType;
  shape?: 'circle' | 'square';
}

function Icon({
  bgColor,
  customColor = '#344054',
  hasNotifications,
  name,
  shape,
  ...props
}: IconProps) {
  const effectiveShape = name === 'delete' ? 'square' : shape;
  const iconProps: MuiIconProps = {
    ...props,
    className: `${props.className || ''} ${name}`,
    style: {
      ...(props.style || {}),
      ...(effectiveShape === 'circle' ? {borderRadius: '50%'} : {}),
      ...(effectiveShape === 'square' ? {borderRadius: '20%'} : {}),
      backgroundColor: bgColor,
      color: customColor,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '48px',
      height: '48px',
    },
  };
  const IconComponent = iconLookup[name];

  if (!IconComponent) {
    console.warn(`Icon with name "${name}" does not exist in iconLookup`);
    return null;
  }
  if (hasNotifications) {
    return (
      <MuiIcon {...iconProps}>
        <Badge
          variant="dot"
          color="error"
          overlap="circular"
          anchorOrigin={{vertical: 'top', horizontal: 'right'}}
          sx={{
            '& .MuiBadge-dot': {
              top: '3px',
              right: '3px',
              zIndex: 1,
            },
          }}
        >
          <IconComponent />
        </Badge>
      </MuiIcon>
    );
  }

  return (
    <MuiIcon {...iconProps} data-testid="name">
      <IconComponent />
    </MuiIcon>
  );
}

export default Icon;
