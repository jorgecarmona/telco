import React from 'react';

import {
  useForm,
  Controller,
  SubmitHandler,
  FieldValues,
  UseFormReturn,
  FieldError,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Box } from '@mui/material';

interface SmartFormProps {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  schema: any;
}

interface ChildProps {
  name: string;
  defaultValue?: unknown;
  rules?: object;
  error?: boolean;
  helperText?: string;
}

function SmartForm({ children, onSubmit, schema }: SmartFormProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  }: UseFormReturn<FieldValues> = useForm({
    resolver: zodResolver(schema),
  });
  console.log(errors);
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<ChildProps>(child) && child.props.name) {
          const { name, defaultValue, rules, ...rest } = child.props;

          return (
            <Controller
              key={name}
              name={name}
              control={control}
              defaultValue={defaultValue || ''}
              rules={rules}
              {...rest}
              render={({ field }) =>
                React.cloneElement(child, {
                  ...field,
                  error: !!errors[child.props.name],
                  helperText:
                    (errors[child.props.name] as FieldError)?.message ||
                    undefined ||
                    child.props.helperText,
                })
              }
            />
          );
        }
        return child;
      })}
    </Box>
  );
}

export default SmartForm;
