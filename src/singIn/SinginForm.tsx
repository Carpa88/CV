import  Copyright  from "./../elements/Copyright";
import { Avatar, Checkbox, Typography, Button, TextField, FormControlLabel } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { IForm } from "./types";

const SinginForm = () => {
  const { control, watch, handleSubmit, formState: { errors } } = useForm<IForm>({
    defaultValues: {
      remember: false,
      email: 'srtrt@sg.gh',
      password: '123345567',
    }
  })
  console.log(watch('email'), watch('password'), watch('remember'))
  const onSubmit: SubmitHandler<IForm> = (data) => 
    console.log(`You send email: ${data.email} and password: ${data.password}. "Remember me" is ${data.remember ? 'checked' : 'unchecked'}.`);
    // console.log(data)
    return (
    <>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => 
          <TextField 
            margin='dense' 
            label={<Typography>Email</Typography>} 
            variant="outlined" 
            fullWidth
            error={!!errors.email}
            helperText={errors.password && "It's a required field"}
            type='email'
            {...field}
            />
          }
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: true, minLength: 6 }}
          render={({ field }) => 
            <TextField 
              margin='dense' 
              label={<Typography>Password</Typography>} 
              variant="outlined" 
              type='password'
              fullWidth
              error={!!errors.password}
              helperText={errors.password ? "It's a required field and it's should be at least 6 characters" : 'Minimum 6 characters'}
              {...field}
             />
          }
        />
        <Controller
          name="remember"
          control={control}
          rules={{ required: true }}
          render={({ field }) => 
            
              <Checkbox color="primary" {...field}/>
            
          }
        />
        
        <Button
          type="submit"
          fullWidth 
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </form>





      <Copyright sx={{ mt: 5 }} />
    </>
  )
}

export default SinginForm;