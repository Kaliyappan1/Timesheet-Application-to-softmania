import React from "react";
import {
  Box,
  Button,
  Container,
  ThemeProvider,
  Typography,
} from "@mui/material";
import theme from "../../components/Theme";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <ThemeProvider theme={theme}>
        <Container sx={{display: "flex", justifyContent: "center", flexDirection: "column"}} maxWidth="md">
          
            
              <Typography variant="h4">404</Typography>
              <Typography variant="h6">
                The page you’re looking for doesn’t exist.
              </Typography>
              <Link to="/">
              <Button sx={{ mt:2}} variant="contained">Back Home</Button>
              </Link>
            
            
        </Container>
      </ThemeProvider>
    </Box>
  );
}
