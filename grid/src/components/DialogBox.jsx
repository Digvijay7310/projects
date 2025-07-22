import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import AOS from "aos"
import "aos/dist/aos.css"

function DialogBox() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=> {
    AOS.init({duration: 500, once: true})
  })

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Dialog
      </Button>

      <Dialog open={open} onClose={handleClose} data-aos="fade-in">
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          This is the content of the dialog.
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur tenetur non, quisquam asperiores dicta ex molestias necessitatibus placeat magnam culpa, quis quam recusandae dolores nemo dolorum vero maiores quo reprehenderit?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogBox;
