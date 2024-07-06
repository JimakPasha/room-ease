import { Component, ErrorInfo, ReactNode } from "react";
import { Grid, Typography } from "@mui/material";

import { GridContainer } from "./ErrorBoundary.styels";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface IState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, IState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): IState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <GridContainer container>
          <Grid item>
            <Typography variant="h3" gutterBottom>
              Something went wrong
            </Typography>
            <Typography variant="body1" gutterBottom>
              We are already working on fixing the problem
            </Typography>
          </Grid>
          <Grid item></Grid>
        </GridContainer>
      );
    }

    return this.props.children;
  }
}
