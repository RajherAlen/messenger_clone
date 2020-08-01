import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

const FormCont = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    // all the logic to send a message

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    if (input) {
      setMessages([...messages, { username: username, message: input }]);
    }

    setInput("");
  };

  return (
    <div>
      <img
        className="logo"
        src="https://pluspng.com/img-png/facebook-messenger-png-open-2000.png"
        width="60px"
      />

      <form className="app_form">
        <FormControl className="form_control">
          <InputLabel>Enter a message...</InputLabel>
          <Input
            className="app_input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <IconButton
            className="app_iconBtn"
            disabled={!input}
            variant="contained"
            type="submit"
            color="primary"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ message }) => (
          <Message key={message.id} message={message} username={username} />
        ))}
      </FlipMove>
    </div>
  );
};

export default FormCont;
