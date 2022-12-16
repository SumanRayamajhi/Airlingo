import { useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { API_URL } from "../../constants/contants";

const ChatMessageInput = () => {
  const [content, setContent] = useState("");

  const onSubmitMessage = async (e, { id }) => {
    e.preventDefault();

    const body = { id };
    const response = await fetch(`${API_URL}/topic/${id}/messages}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    console.log(response);
  };
  return (
    <Form onSubmit={onSubmitMessage}>
      <InputGroup>
        <FormControl
          placeholder="Write Message"
          aria-label="Write Message"
          aria-describedby="basic-addon2"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </InputGroup>
    </Form>
  );
};

export default ChatMessageInput;
