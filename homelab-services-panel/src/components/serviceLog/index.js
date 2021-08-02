import { Dialog, DialogTitle, DialogContent,
  DialogContentText } from '@material-ui/core';
import React from 'react';

export const ServiceLog = ({ data, isOpen, setOpen }) => {
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">Application logs</DialogTitle>
      <DialogContent dividers="paper">
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          {[...new Array(50)]
              .map(
                  () => `Cras mattis consectetur 
                            purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
