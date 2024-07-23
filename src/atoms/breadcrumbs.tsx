import {
  Breadcrumbs as MuiBreadcrumbs,
  BreadcrumbsProps as MuiBreadcrumbsProps,
} from '@mui/material';
import Link from '@mui/material/Link';

interface NavigationItem {
  label?: string;
  path?: string;
}

export interface BreadcrumbProps extends MuiBreadcrumbsProps {
  separator?: string | JSX.Element;
  items: NavigationItem[];
  onClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path?: string,
  ) => void;
}

function BreadCrumbs({separator = '>', items, onClick}: BreadcrumbProps) {
  if (items.length === 0) {
    return null;
  }
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path?: string,
  ) => {
    event.preventDefault();
    if (onClick) {
      onClick(event, path);
    }
  };

  return (
    <MuiBreadcrumbs
      separator={separator}
      data-testid="breadcrumbs-container"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <Link
            key={index}
            href={isLast ? undefined : item.path ?? '#'}
            underline="hover"
            color="inherit"
            onClick={(event) => handleClick(event, item.path)}
            style={
              isLast
                ? {pointerEvents: 'none', cursor: 'default', fontWeight: 'bold'}
                : {}
            }
          >
            {item.label}
          </Link>
        );
      })}
    </MuiBreadcrumbs>
  );
}

export default BreadCrumbs;