import React from 'react';

import { z } from 'zod';

import SmartForm from '../components/smart-form';
import { Autocomplete, Password, TextField } from '../atoms';

// Define the schema using zod
const schema = z.object({
  firstName: z
    .string()
    .min(1, 'First Name is required')
    .max(50, 'First Name must be 50 characters or less')
    .regex(
      /^[a-zA-Z\s'-]+$/,
      'First Name can only contain letters, spaces, hyphens, and apostrophes',
    ),
  lastName: z
    .string()
    .min(1, 'Last Name is required')
    .max(50, 'Last Name must be 50 characters or less')
    .regex(
      /^[a-zA-Z\s'-]+$/,
      'Last Name can only contain letters, spaces, hyphens, and apostrophes',
    ),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .max(100, 'Password must be 100 characters or less')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter (a-z)')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter (A-Z)')
    .regex(/[0-9]/, 'Password must contain at least one number (0-9)')
    .regex(
      /[@$!%*?&]/,
      'Password must contain at least one special character (@, $, !, %, *, ?, &)',
    ),
});

// Infer the TypeScript type from the schema
export type FormValueSchema = z.infer<typeof schema>;

function App() {
  // Define the submit handler
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div style={{ width: '500px', margin: '2rem auto' }}>
      <SmartForm onSubmit={onSubmit} schema={schema}>
        <TextField
          name="firstName"
          label="First Name"
          id="firstName"
          required
        />
        <TextField name="lastName" label="Last Name" id="lastName" />
        <TextField name="email" label="Email" id="email" />
        <Password
          icon
          name="password"
          label="Password"
          id="password"
          required
        />
        <Autocomplete
          name="autocomplete"
          label="Autocomplete"
          id="autocomplete"
          options={[
            { label: 'English', value: 'english' },
            { label: 'Spanish', value: 'spanish' },
            { label: 'French', value: 'french' },
            { label: 'German', value: 'german' },
            { label: 'Chinese', value: 'chinese' },
          ]}
          value=""
          helperText="Select a language"
        />

        <button type="submit">Login</button>
      </SmartForm>
    </div>
  );
}

export default App;
