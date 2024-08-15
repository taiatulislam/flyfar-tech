import * as React from "react";
import banner from "../assets/mainbanner.png";
import FlightIcon from "@mui/icons-material/Flight";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import AirplanemodeActiveOutlinedIcon from "@mui/icons-material/AirplanemodeActiveOutlined";

const Banner = () => {
  const [value, setValue] = React.useState(0);
  const [radioValue, setRadioValue] = React.useState("round");

  const handleRadio = (event, newValue) => {
    setRadioValue(newValue);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="max-w-[1300px] mx-auto">
      <div
        className="min-h-[400px] rounded-xl px-16 py-6"
        style={{ backgroundImage: `url('${banner}')` }}
      >
        <Box
          sx={{
            width: "40%",
            margin: "20px auto",
            bgcolor: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "40px",
            height: "50px",
          }}
        >
          <Tabs value={value} onChange={handleChange} indicatorColor="none">
            <Tab
              icon={
                <FlightIcon className="rotate-45" sx={{ color: "#ffffff" }} />
              }
              iconPosition="start"
              label="Flight"
              sx={{
                bgcolor: "#32d095",
                color: "#ffffff",
                minHeight: "40px",
                height: "40px",
                marginTop: "17px",
                padding: "0px 20px",
                borderRadius: "20px",
              }}
            />
            <Tab
              icon={
                <HomeWorkIcon
                  size="small"
                  sx={{
                    color: "#525371",
                    minHeight: "40px",
                    height: "40px",
                    padding: "0px",
                  }}
                />
              }
              iconPosition="start"
              label="Hotel"
              sx={{ color: "#32d095" }}
            />
            <Tab
              icon={
                <TravelExploreIcon
                  sx={{
                    color: "#525371",
                    minHeight: "40px",
                    height: "40px",
                    padding: "0px",
                  }}
                />
              }
              iconPosition="start"
              label="Tour"
              sx={{ color: "#32d095" }}
            />
            <Tab
              icon={
                <AirplaneTicketIcon
                  size="small"
                  sx={{
                    color: "#525371",
                    minHeight: "40px",
                    height: "40px",
                    padding: "0px",
                  }}
                />
              }
              iconPosition="start"
              label="Visa"
              sx={{ color: "#32d095" }}
            />
          </Tabs>
        </Box>

        <div className="flex">
          <div className="bg-white rounded-xl basis-2/3 px-[30px] py-[20px]">
            {/* Radio Button */}
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="label-placement"
                name="position"
                defaultValue="round"
                onChange={handleRadio}
              >
                <FormControlLabel
                  value="round"
                  control={<Radio size="small" />}
                  label="Round-Way"
                  sx={{
                    color: "#32d095",
                    textTransform: "uppercase",
                  }}
                />
                <FormControlLabel
                  value="one"
                  control={<Radio size="small" />}
                  label="One-Way"
                  sx={{ color: "#32d095", textTransform: "uppercase" }}
                />
                <FormControlLabel
                  value="multi"
                  control={<Radio size="small" />}
                  label="Multi-City"
                  sx={{ color: "#32d095", textTransform: "uppercase" }}
                />
              </RadioGroup>
            </FormControl>

            <div className="flex justify-between">
              <div className="text-center basis-2/5">
                <h3 className="uppercase my-2">From</h3>
                <h2 className="text-4xl text-secondary-color mb-7">DAC</h2>
                <button className="flex items-center rounded-sm text-left w-full">
                  <LocationOnOutlinedIcon
                    sx={{ height: "28px", width: "40px" }}
                    className="bg-secondary-color text-white rounded-l-sm p-1"
                  ></LocationOnOutlinedIcon>
                  <p className=" bg-body-color py-1 px-3 text-sm flex-grow">
                    Hazrat Shahjalal Intl Airport (DAC)
                  </p>
                </button>
                <button
                  className={`${
                    radioValue !== "multi"
                      ? "flex items-center rounded-sm mt-4 text-left w-full"
                      : "hidden"
                  }`}
                >
                  <CalendarMonthIcon
                    sx={{ height: "28px", width: "40px" }}
                    className="bg-secondary-color text-white rounded-l-sm p-1"
                  ></CalendarMonthIcon>
                  <p className=" bg-body-color py-1 px-3 text-sm flex-grow">
                    16 Aug 24
                  </p>
                </button>
              </div>

              {/* Plane */}
              <div className="basis-1/5 flex flex-col">
                <AirplanemodeActiveOutlinedIcon
                  sx={{ fontSize: 100, color: "#32d095" }}
                  className="rotate-90 mx-auto"
                ></AirplanemodeActiveOutlinedIcon>
                <AirplanemodeActiveOutlinedIcon
                  sx={{
                    fontSize: radioValue === "round" ? 100 : "0",
                    color: radioValue === "round" ? "#32d095" : "#FFFFFF",
                    rotate: radioValue === "round" ? "270deg" : "0deg",
                    marginTop: radioValue === "round" ? "-48px" : "0",
                    marginLeft: radioValue === "round" ? "28px" : "0",
                    display: radioValue === "round" ? "block" : "hidden",
                  }}
                ></AirplanemodeActiveOutlinedIcon>
              </div>

              <div className="text-center basis-2/5">
                <h3 className="uppercase my-2">To</h3>
                <h2 className="text-4xl text-secondary-color mb-7">CXB</h2>
                <button className="flex items-center text-left rounded-md w-full">
                  <LocationOnOutlinedIcon
                    sx={{ height: "28px", width: "40px" }}
                    className="bg-secondary-color text-white rounded-l-md"
                  ></LocationOnOutlinedIcon>
                  <p className=" bg-body-color py-1 px-3 text-sm flex-grow">
                    Cox&apos;s Bazar Airport (CXB)
                  </p>
                </button>
                <button
                  className={`${
                    radioValue !== "multi"
                      ? "flex items-center text-left rounded-sm mt-4 w-full"
                      : "hidden"
                  }`}
                >
                  <CalendarMonthIcon
                    sx={{ height: "28px", width: "40px" }}
                    className="bg-secondary-color text-white rounded-l-sm"
                  ></CalendarMonthIcon>
                  <p className=" bg-body-color py-1 px-3 text-sm flex-grow">
                    16 Aug 24
                  </p>
                </button>
              </div>
            </div>

            {/* Multi-city */}
            <div
              className={`${
                radioValue === "multi" ? "flex justify-between" : "hidden"
              }`}
            >
              <div className="text-center basis-2/5">
                <h3 className="uppercase my-2">From</h3>
                <h2 className="text-4xl text-secondary-color mb-7">JED</h2>
                <button className="flex items-center rounded-sm text-left w-full">
                  <LocationOnOutlinedIcon
                    sx={{ height: "28px", width: "40px" }}
                    className="bg-secondary-color text-white rounded-l-sm p-1"
                  ></LocationOnOutlinedIcon>
                  <p className=" bg-body-color py-1 px-3 text-sm flex-grow">
                    Hazrat Shahjalal Intl Airport (DAC)
                  </p>
                </button>
              </div>

              {/* Plane */}
              <div className="basis-1/5 flex flex-col">
                <AirplanemodeActiveOutlinedIcon
                  sx={{ fontSize: 100, color: "#32d095" }}
                  className="rotate-90 mx-auto"
                ></AirplanemodeActiveOutlinedIcon>
              </div>

              <div className="text-center basis-2/5">
                <h3 className="uppercase my-2">To</h3>
                <h2 className="text-4xl text-secondary-color mb-7">MED</h2>
                <button className="flex items-center text-left rounded-md w-full">
                  <LocationOnOutlinedIcon
                    sx={{ height: "28px", width: "40px" }}
                    className="bg-secondary-color text-white rounded-l-md"
                  ></LocationOnOutlinedIcon>
                  <p className=" bg-body-color py-1 px-3 text-sm flex-grow">
                    Cox&apos;s Bazar Airport (CXB)
                  </p>
                </button>
                <button
                  className={`${
                    radioValue !== "round"
                      ? "flex items-center text-left rounded-sm mt-4 w-full"
                      : "hidden"
                  }`}
                >
                  <CalendarMonthIcon
                    sx={{ height: "28px", width: "40px" }}
                    className="bg-secondary-color text-white rounded-l-sm"
                  ></CalendarMonthIcon>
                  <p className=" bg-body-color py-1 px-3 text-sm flex-grow">
                    16 Aug 24
                  </p>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl basis-1/3 flex flex-col justify-between gap-5 p-4 border-l-2 border-dotted border-[primary-color]">
            {/* Passenger Selection */}
            <div className="grid grid-cols-3 gap-2">
              <FormControl>
                <Select
                  defaultValue={1}
                  sx={{
                    backgroundColor: "#d7e7f4",
                    height: "30px",
                    fontSize: "14px",
                    color: "#525371",
                  }}
                >
                  <MenuItem
                    value={1}
                    sx={{
                      fontSize: "14px",
                      color: "#525371",
                      "&:hover": {
                        backgroundColor: "#4e53e4",
                        // color: "#ffffff",
                      },
                    }}
                  >
                    1 ADULT
                  </MenuItem>
                  <MenuItem
                    value={2}
                    sx={{
                      fontSize: "14px",
                      "&:hover": {
                        backgroundColor: "#4e53e4",
                        color: "#ffffff",
                      },
                    }}
                  >
                    2 ADULT
                  </MenuItem>
                  <MenuItem
                    value={3}
                    sx={{
                      fontSize: "14px",
                      "&:hover": {
                        backgroundColor: "#4e53e4",
                        color: "#ffffff",
                      },
                    }}
                  >
                    3 ADULT
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <Select
                  defaultValue={4}
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    backgroundColor: "#d7e7f4",
                    height: "30px",
                    fontSize: "14px",
                    color: "#525371",
                  }}
                >
                  <MenuItem
                    value={4}
                    sx={{
                      fontSize: "14px",
                      "&:hover": {
                        backgroundColor: "#4e53e4",
                        color: "#ffffff",
                      },
                    }}
                  >
                    1 CHILD
                  </MenuItem>
                  <MenuItem
                    value={5}
                    sx={{
                      fontSize: "14px",
                      "&:hover": {
                        backgroundColor: "#4e53e4",
                        color: "#ffffff",
                      },
                    }}
                  >
                    2 CHILD
                  </MenuItem>
                  <MenuItem
                    value={6}
                    sx={{
                      fontSize: "14px",
                      "&:hover": {
                        backgroundColor: "#4e53e4",
                        color: "#ffffff",
                      },
                    }}
                  >
                    3 CHILD
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <Select
                  defaultValue={7}
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    backgroundColor: "#d7e7f4",
                    height: "30px",
                    fontSize: "14px",
                    color: "#525371",
                  }}
                >
                  <MenuItem
                    value={7}
                    sx={{
                      fontSize: "14px",
                      "&:hover": {
                        backgroundColor: "#4e53e4",
                        color: "#ffffff",
                      },
                    }}
                  >
                    1 INFANT
                  </MenuItem>
                  <MenuItem
                    value={8}
                    sx={{
                      fontSize: "14px",
                      "&:hover": {
                        backgroundColor: "#4e53e4",
                        color: "#ffffff",
                      },
                    }}
                  >
                    2 INFANT
                  </MenuItem>
                  <MenuItem
                    value={9}
                    sx={{
                      fontSize: "14px",
                      "&:hover": {
                        backgroundColor: "#4e53e4",
                        color: "#ffffff",
                      },
                    }}
                  >
                    3 INFANT
                  </MenuItem>
                </Select>
              </FormControl>
              {/* Ticket Selection */}
              <FormControl className="col-span-3">
                <Select
                  defaultValue={50}
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    backgroundColor: "#d7e7f4",
                    height: "30px",
                    fontSize: "14px",
                    color: "#525371",
                    marginTop: "10px",
                  }}
                >
                  <MenuItem
                    value={50}
                    sx={{
                      fontSize: "14px",
                      "&:hover": {
                        backgroundColor: "#4e53e4",
                        color: "#ffffff",
                      },
                    }}
                  >
                    Economy
                  </MenuItem>
                  <MenuItem
                    value={51}
                    sx={{
                      fontSize: "14px",
                      "&:hover": {
                        backgroundColor: "#4e53e4",
                        color: "#ffffff",
                      },
                    }}
                  >
                    Premium Economy
                  </MenuItem>
                  <MenuItem
                    value={52}
                    sx={{
                      fontSize: "14px",
                      "&:hover": {
                        backgroundColor: "#4e53e4",
                        color: "#ffffff",
                      },
                    }}
                  >
                    Business
                  </MenuItem>
                  <MenuItem
                    value={53}
                    sx={{
                      fontSize: "14px",
                      "&:hover": {
                        backgroundColor: "#4e53e4",
                        color: "#ffffff",
                      },
                    }}
                  >
                    Premium Business
                  </MenuItem>
                  <MenuItem
                    value={54}
                    sx={{
                      fontSize: "14px",
                      "&:hover": {
                        backgroundColor: "#4e53e4",
                        color: "#ffffff",
                      },
                    }}
                  >
                    First Class
                  </MenuItem>
                  <MenuItem
                    value={55}
                    sx={{
                      fontSize: "14px",
                      "&:hover": {
                        backgroundColor: "#4e53e4",
                        color: "#ffffff",
                      },
                    }}
                  >
                    Premium First Class
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* Flight Search Button */}
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#32d095",
              }}
            >
              Search For Flight
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
