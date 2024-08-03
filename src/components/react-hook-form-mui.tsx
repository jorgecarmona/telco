import { FieldValues, useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import TextField from '../atoms/text-field';

const schema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .min(5, 'Name must be at least 5 characters'),
});

function MuiReactHookForm() {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log(data);
    reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Controller
          name="name"
          control={control}
          // defaultValue=""
          rules={{
            required: 'Name is required',
            minLength: {
              value: 5,
              message: 'Name must be at least 5 characters',
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              name="name"
              id="name"
              label="Name"
              required
              error={!!errors.name}
              helperText={errors.name ? `${errors.name.message}` : ''}
            />
          )}
        />
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default MuiReactHookForm;
