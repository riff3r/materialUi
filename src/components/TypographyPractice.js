import { Box, Button, Typography } from "@material-ui/core";
import React from "react";

const TypographyPractice = () => {
  return (
    <Box color="text.primary" align="center">
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Typography variant="h1">Hello World</Typography>

      <Typography variant="h2">Hello World</Typography>

      <Typography variant="h3">Hello World</Typography>

      <Typography variant="h4" component="h1" gutterBottom>
        Heading - 4
      </Typography>

      <Typography variant="h5">Hello World</Typography>

      <Typography variant="h6">Hello World</Typography>

      <Typography variant="subtitle1">Subtitle - 1</Typography>

      <Typography variant="subtitle2">Subtitle - 2</Typography>

      <Typography variant="body1">Hello World</Typography>

      <Typography variant="body2">Hello World</Typography>
    </Box>
  );
};

export default TypographyPractice;
