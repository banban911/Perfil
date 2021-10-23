import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import {
  Typography,
  FormControl,
  Select,
  MenuItem,
  Button,
  Chip,
  Box,
} from "@mui/material";
import WelcomeMessage from "../welcome/WelcomeMessage";
import { ThemeContext } from "../contexts/ThemeContext";

function Footer() {
  //state
  const [position, setPosition] = useState<string>("Graduate");

  // context

  const { theme } = useContext(ThemeContext);

  // timezone config
  const [time, setTime] = useState<string>("");
  //useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date(Date.now()).toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const onPositionChange = (event: any) =>
    setPosition(event.target.value as string);
  return (
    <Box
      color={theme}
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      width={1}
      py={0}
    >
      <Typography variant='h6' component='h2'>
        <Link to='./'>Note List</Link>
      </Typography>
      <div className='welcomeMessage'>
        <Box textAlign='center' display='flex' alignItems='center'>
          <WelcomeMessage position={position} />
          <Box ml={1}>
            <FormControl>
              <Select value={position} onChange={onPositionChange}>
                <MenuItem value='Graduate'>Graduate</MenuItem>
                <MenuItem value='Under Graduate'>Under Graduate</MenuItem>
                <MenuItem value='Post Graduate'>Post Graduate</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </div>
      <Box textAlign='center'>
        <Box my={1} display='flex' justifyContent='between' alignItems='center'>
          <Typography fontSize={12} mr={2}>
            {time}
          </Typography>

          <Link to='./login'>
            <Button variant='contained'>Login </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
