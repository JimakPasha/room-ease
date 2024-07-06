import { FC, ReactNode } from "react";
import {
  Typography,
  Button,
  Modal as MuiModal,
  Fade,
  Box,
} from "@mui/material";

interface ModalProps {
  title: string;
  isOpen: boolean;
  children?: ReactNode;
  submitLabel?: string;
  onClose: () => void;
  onSubmit?: () => void;
}

export const Modal: FC<ModalProps> = ({
  title,
  isOpen,
  children,
  submitLabel,
  onSubmit,
  onClose,
}) => {
  return (
    <MuiModal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Fade in={isOpen}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            {title}
          </Typography>

          <div>{children}</div>

          {onSubmit && (
            <Button
              variant="contained"
              onClick={onSubmit}
              sx={{ mt: 2, mr: 1 }}
            >
              {submitLabel || "Submit"}
            </Button>
          )}
          <Button variant="outlined" onClick={onClose} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Fade>
    </MuiModal>
  );
};
