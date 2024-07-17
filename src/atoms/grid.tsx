import {Grid as MuiGrid, Grid2Props as MuiGridProps} from '@mui/material';

function Grid({children, ...rest}: MuiGridProps) {
  return <MuiGrid {...rest}>{children}</MuiGrid>;
}

export default Grid;
