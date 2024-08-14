import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 464,
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: "32px",
  borderRadius: "5px",
};

const textField = {
  margin: "10px 0",
  padding: "5px",
  backgroundColor: "#d7e7f4",
  borderRadius: "5px",
};

const LoginModal = () => {
  return (
    <div>
      <Box sx={style}>
        <Typography
          id="modal-title"
          variant="h5"
          sx={{ fontSize: "25px", fontWeight: "600", marginBottom: "10px" }}
          className="text-center text-secondary-color"
        >
          Sign In
        </Typography>

        <FormControl sx={{ width: "100%" }}>
          <Input
            id="email"
            placeholder="Email"
            fullWidth
            disableUnderline
            startAdornment={
              <InputAdornment position="start">
                <PersonOutlineIcon className="text-secondary-color" />
              </InputAdornment>
            }
            sx={textField}
          />
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <Input
            id="password"
            placeholder="Password"
            disableUnderline
            startAdornment={
              <InputAdornment position="start">
                <LockIcon className="text-secondary-color" />
              </InputAdornment>
            }
            sx={textField}
          />
        </FormControl>

        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              sx={{
                color: "#888",
                "&.Mui-checked": {
                  color: "#32d095",
                },
              }}
            />
          }
          label="By creating an account you agree to our Terms & Conditions"
          sx={{
            "& .MuiTypography-root": {
              fontSize: "12px",
            },
          }}
        />

        <Typography variant="body2" sx={{ fontSize: "14px", margin: "15px 0" }}>
          Forget Password ?
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#32d095",
            textTransform: "none",
          }}
        >
          Sign In
        </Button>

        <div className="flex gap-2 items-center my-3">
          <hr className="border border-primary-color flex-1 opacity-30" />
          <Typography
            variant="h6"
            sx={{ fontWeight: "400" }}
            className="text-secondary-color"
          >
            OR
          </Typography>
          <hr className="border border-primary-color flex-1 opacity-30" />
        </div>

        <Button
          variant="outlined"
          className="w-full"
          sx={{
            color: "#525371",
            backgroundColor: "#d7e7f4",
            textTransform: "none",
            fontSize: "16px",
          }}
          startIcon={<GoogleIcon />}
        >
          Login with Google
        </Button>

        <Typography
          variant="body2"
          sx={{ marginTop: "10px" }}
          className="text-secondary-color"
        >
          Don&apos;t have a Account?
          <span className="text-primary-color"> Sign Up</span>
        </Typography>
      </Box>
    </div>
  );
};

export default LoginModal;
