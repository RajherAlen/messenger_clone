import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;

  return (
    <div className={`message ${isUser && "message_user"}`} ref={ref}>
      <p className="user">
        {!isUser && `${message.username || "Unkwnown User"} `}
      </p>
      <Card className={isUser ? "message_userCard" : "message_guestCard"}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
