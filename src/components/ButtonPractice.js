import {
  Button,
  ButtonGroup,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import SendIcon from "@material-ui/icons/Send";

const ButtonPractice = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Button variant="text" color="primary" size="small">
            Text
          </Button>{" "}
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="contained" color="primary" size="medium">
            Button - 1
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="outlined" color="primary" size="large">
            Button - 1
          </Button>{" "}
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Button variant="contained" color="primary">
            Primary
          </Button>{" "}
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="contained" color="secondary">
            secondary
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="contained" color="error-light">
            error
          </Button>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Button variant="contained" color="warning">
            warning
          </Button>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Button variant="contained" color="info">
            info
          </Button>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Button variant="contained" color="success">
            success
          </Button>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Button variant="contained" startIcon={<SendIcon />}>
            Send
          </Button>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <IconButton aria-label="send" color="primary">
            <SendIcon />
          </IconButton>
        </Grid>

        <Grid item xs={12} sm={6}>
          <IconButton aria-label="send" color="primary" disableRipple>
            <SendIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h2">Button Group </Typography>
        </Grid>

        <Grid item xs={12}>
          <ButtonGroup
            variant="contained"
            color="secondary"
            orientation="vertical"
            size="small"
            aria-label="Alignment button group"
          >
            <Button onClick={() => alert("Left Clicked")}>Left</Button>
            <Button>Center</Button>
            <Button>RIght</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </>
  );
};

export default ButtonPractice;
