import {
  Skeleton as MuiSkeleton,
  SkeletonProps as MuiSkeletonProps,
} from '@mui/material';

function Skeleton({
  animation,
  children,
  component,
  height,
  sx,
  variant,
  width,
}: MuiSkeletonProps) {
  return (
    <>
      <MuiSkeleton
        animation={animation}
        component={component ? component : 'span'}
        data-testid="skeleton"
        height={height}
        sx={sx}
        variant={variant}
        width={width}
      >
        {children}
      </MuiSkeleton>
    </>
  );
}

export default Skeleton;
