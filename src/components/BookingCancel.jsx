"use client";

import { TrashBin } from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";

export function BookingCancel({bookingId}) {
  const handleCancel=async()=>{
    const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
        method: "DELETE",
        headers:{
            'content-type': 'application/json'
        }
    })
    const data = await res.json();
    console.log(data);
    window.location.reload()
    
  }
  return (
    <AlertDialog>
     <Button variant='outline' className={'rounded-none items-center text-red-500 border border-red-500'}><TrashBin />Cancel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Booking permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
              onClick={handleCancel}
              slot="close" variant="danger">
                Confirm
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}