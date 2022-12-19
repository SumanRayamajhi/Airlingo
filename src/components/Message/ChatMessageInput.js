import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// import { Form, FormControl, InputGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { AIRLINGO_ACCESS_TOKEN, API_URL } from "../../constants/contants";
import "bootstrap/dist/css/bootstrap.css";
import "./ChatMessageInput.css";

const ChatMessageInput = ({ data, onMessagePost }) => {
  const { topicId } = useParams();

  const lastMessage =
    data.messages[data.messages.length - 1]?.type !== "FromUser";
  console.log(lastMessage);

  const [content, setContent] = useState("");

  const onSubmitMessage = async (e) => {
    e.preventDefault();

    const body = { text: content };

    if (localStorage.getItem(AIRLINGO_ACCESS_TOKEN) && lastMessage) {
      const resp = await fetch(`${API_URL}/api/topics/${topicId}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(
            AIRLINGO_ACCESS_TOKEN
          )}`,
        },
        body: JSON.stringify(body),
      });
      onMessagePost();
    }
    setContent("");
  };

  return (
    <>
      <Form onSubmit={onSubmitMessage}>
        <InputGroup className="mb-3 mt-5 bg-dark overflow-hidden ">
          <Form.Control
            className="bg-dark border-0 px-3 text-light fs-4 bg-transparent"
            placeholder="Write a message"
            aria-label="Write a message"
            aria-describedby="basic-addon2"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </InputGroup>
      </Form>
    </>
  );
};

export default ChatMessageInput;
