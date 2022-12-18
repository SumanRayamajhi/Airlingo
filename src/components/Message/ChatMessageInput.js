import { useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import { AIRLINGO_ACCESS_TOKEN, API_URL } from "../../constants/contants";

const ChatMessageInput = () => {
  const data = useLoaderData();
  console.log(data);

  const lastMessages =
    data.messages[data.messages.length - 1].type !== "FromUser";
  console.log(lastMessages);
  const text = data?.messages?.map((topic) => topic.text);
  // const text = textTopic.toString();
  // console.log(textTopic);

  const { topicId } = useParams();

  console.log("topicId..", topicId);
  console.log("text..", text);

  const [content, setContent] = useState("");

  const onSubmitMessage = (e) => {
    e.preventDefault();
    console.log("topicid", topicId);

    if (localStorage.getItem(AIRLINGO_ACCESS_TOKEN) && lastMessages) {
      return fetch(`${API_URL}/api/topics/${topicId}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(
            AIRLINGO_ACCESS_TOKEN
          )}`,

          body: JSON.stringify({
            text: text,
            content: content,
          }),
        },
      });
    }
    setContent("");
  };

  return (
    <Form onSubmit={onSubmitMessage}>
      <InputGroup>
        <FormControl
          placeholder="Write a message"
          aria-label="Write a message"
          aria-describedby="basic-addon2"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </InputGroup>
    </Form>
  );
};

export default ChatMessageInput;
