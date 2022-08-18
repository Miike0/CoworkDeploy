import React, { useState } from "react";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import Avatar from "@mui/material/Avatar";
import Offcanvas from "react-bootstrap/Offcanvas";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export default function ChatBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

      <div className="chatbar">
        <div className="chatbar-top cursor-pointer btn border-0">
          <ModeCommentIcon
            className="mb-2 mt-2 "
            sx={{ fontSize: 50 }}
            onClick={() => console.log("hola")}
          />
        </div>
        <div className="contacts-container">
          <Avatar
            className="mb-2"
            alt="user img"
            src="https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2Funknown.png?alt=media&token=c68e75bd-525b-4601-9356-fdc6af8931f1"
          />
          <Avatar
            className="mb-2"
            alt="user img"
            src="https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2Funknown.png?alt=media&token=c68e75bd-525b-4601-9356-fdc6af8931f1"
          />
          <Avatar
            className="mb-2"
            alt="user img"
            src="https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2Funknown.png?alt=media&token=c68e75bd-525b-4601-9356-fdc6af8931f1"
          />
          <Avatar
            className="mb-2"
            alt="user img"
            src="https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2Funknown.png?alt=media&token=c68e75bd-525b-4601-9356-fdc6af8931f1"
          />
          <Avatar
            className="mb-2"
            alt="user img"
            src="https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2Funknown.png?alt=media&token=c68e75bd-525b-4601-9356-fdc6af8931f1"
          />
          <Avatar
            className="mb-2"
            alt="user img"
            src="https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2Funknown.png?alt=media&token=c68e75bd-525b-4601-9356-fdc6af8931f1"
          />
          <Avatar
            className="mb-2"
            alt="user img"
            src="https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2Funknown.png?alt=media&token=c68e75bd-525b-4601-9356-fdc6af8931f1"
          />
          <Avatar
            className="mb-2"
            alt="user img"
            src="https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2Funknown.png?alt=media&token=c68e75bd-525b-4601-9356-fdc6af8931f1"
          />
          <Avatar
            className="mb-2"
            alt="user img"
            src="https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2Funknown.png?alt=media&token=c68e75bd-525b-4601-9356-fdc6af8931f1"
          />
          <Avatar
            className="mb-2"
            alt="user img"
            src="https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2Funknown.png?alt=media&token=c68e75bd-525b-4601-9356-fdc6af8931f1"
          />
          <Avatar
            className="mb-2"
            alt="user img"
            src="https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2Funknown.png?alt=media&token=c68e75bd-525b-4601-9356-fdc6af8931f1"
          />
          <Avatar
            className="mb-2"
            alt="user img"
            src="https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2Funknown.png?alt=media&token=c68e75bd-525b-4601-9356-fdc6af8931f1"
          />
          <Avatar
            className="mb-2"
            alt="user img"
            src="https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2Funknown.png?alt=media&token=c68e75bd-525b-4601-9356-fdc6af8931f1"
          />
          <Avatar
            className="mb-2"
            alt="user img"
            src="https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2Funknown.png?alt=media&token=c68e75bd-525b-4601-9356-fdc6af8931f1"
          />
          <Avatar
            className="mb-2"
            alt="user img"
            src="https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2Funknown.png?alt=media&token=c68e75bd-525b-4601-9356-fdc6af8931f1"
          />
          <Avatar
            className="mb-2"
            alt="user img"
            src="data:image/jpeg;base64,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"
          />
          <Avatar
            className="mb-2"
            alt="user img"
            src="https://firebasestorage.googleapis.com/v0/b/cowork-9bddd.appspot.com/o/websiteImages%2Funknown.png?alt=media&token=c68e75bd-525b-4601-9356-fdc6af8931f1"
          />
        </div>

        <div className="chatbar-bottom ">
          <ArrowBackIosIcon
            className="mb-2 mt-2 ms-4 "
            sx={{ fontSize: 50 }}
            onClick={handleShow}
          />
        </div>

        <Offcanvas show={show} onHide={handleClose} placement={"end"}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </div>

  );
}
