import { FC } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

import { StyledBox, StyledPaper } from "./AboutApp.styles";

export const AboutApp: FC = () => {
  return (
    <StyledBox>
      <StyledPaper elevation={3}>
        <Typography variant="h4" gutterBottom>
          About Our Hotel Booking Application
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />
        <List>
          <ListItem>
            <ListItemText
              primary="Welcome to our Hotel Booking Application"
              secondary="Your one-stop solution for booking hotel rooms effortlessly"
            />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText
              primary="Main Features"
              secondary={
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Room Display with Pagination"
                      secondary="Rooms are displayed with pagination, showing 4 items per page"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Sorting Options"
                      secondary="Sort rooms by name (ascending and descending) or price (ascending and descending). Sorting and pagination are handled on the front-end. By default, sorting is set to price ascending"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="View Modes"
                      secondary="Switch between GRID and LIST views for convenient room display according to your preferences"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Room Availability Check"
                      secondary="Check if a room is available, view its current status and the latest price"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Check Availability of All Rooms"
                      secondary="Enable the 'Check availability of all' flag to check the status of all rooms at once"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Booking a Room"
                      secondary="If a room is available, you can book it by clicking the 'Book' button. A notification will confirm a successful booking"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Error Handling and Loading States"
                      secondary="All requests handle errors and loading states, ensuring you are always aware of the current status"
                    />
                  </ListItem>
                </List>
              }
            />
          </ListItem>
        </List>
      </StyledPaper>
    </StyledBox>
  );
};
