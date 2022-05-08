import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import bsCustomFileInput from "bs-custom-file-input";

function Trip() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Trip</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                Create
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              refresh
            </li>
          </ol>
        </nav>
      </div>
      <div>
        <div className="row">
          <div className="col grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Unit Name</th>
                        <th>Unit Type</th>
                        <th>Passenger</th>
                        <th>Pickup Location</th>
                        <th>Date/Time</th>
                        <th>Destination</th>
                        <th>Drop/Return</th>
                        <th>Progress</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>UBL 389L</td>
                        <td>Passenger Car</td>
                        <td>masiko timothy</td>
                        <td>kampala</td>
                        <td>Feb 2, 2021 05:36pm</td>
                        <td>Rotary ave</td>
                        <td className="text-danger">
                          {" "}
                          <i className="mdi mdi-arrow-up"></i>Drop
                        </td>
                        <td>
                          <label className="badge badge-danger">Pending</label>
                        </td>
                        <td>
                          <button type="button" className="btn btn-social-icon">
                            <i className="mdi mdi-border-color"></i>
                          </button>
                          <button type="button" className="btn btn-social-icon">
                            <i className="mdi mdi-delete"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>UBL 389L</td>
                        <td>Passenger Car</td>
                        <td>masiko timothy</td>
                        <td>kampala</td>
                        <td>Feb 2, 2021 05:36pm</td>
                        <td>Rotary ave</td>
                        <td className="text-success">
                          {" "}
                          <i className="mdi mdi-arrow-down"></i>Return
                        </td>
                        <td>
                          <label className="badge badge-danger">Pending</label>
                        </td>

                        <td>
                          <button
                            onClick={handleClickOpen}
                            type="button"
                            className="btn btn-social-icon"
                          >
                            <i className="mdi mdi-border-color"></i>
                          </button>
                          <button type="button" className="btn btn-social-icon">
                            <i className="mdi mdi-delete"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>New Trip</DialogTitle>
              <DialogContent>
                <form className="forms-sample" style={{ width: "500px" }}>
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">
                      Select Vehicle
                    </label>
                    <Form.Control
                      type="text"
                      id="exampleInputUsername1"
                      placeholder="Username"
                      size="lg"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">
                      Select Passenger
                    </label>
                    <Form.Control
                      type="text"
                      id="exampleInputUsername1"
                      placeholder="Username"
                      size="lg"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">
                      Pickup location
                    </label>
                    <Form.Control
                      type="text"
                      id="exampleInputUsername1"
                      placeholder="Username"
                      size="lg"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Destination</label>
                    <Form.Control
                      type="text"
                      id="exampleInputUsername1"
                      placeholder="Username"
                      size="lg"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Reason</label>
                    <Form.Control
                      type="text"
                      id="exampleInputUsername1"
                      placeholder="Username"
                      size="lg"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Driver</label>
                    <Form.Control
                      type="text"
                      id="exampleInputUsername1"
                      placeholder="Username"
                      size="lg"
                    />
                  </Form.Group>
                </form>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Subscribe</Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trip;
