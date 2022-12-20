import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import ChatMessageInput from "./ChatMessageInput";
import { AIRLINGO_ACCESS_TOKEN, API_URL } from "../../constants/contants";
import { TiDelete } from "react-icons/ti";
import { GiSpeaker } from "react-icons/gi";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import "./ChatPage.css";

const ChatPage = () => {
  // const data = useLoaderData()
  const [data, setData] = useState({ messages: [] });
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const { topicId } = useParams();

  const getData = async () => {
    if (localStorage.getItem(AIRLINGO_ACCESS_TOKEN)) {
      const resp = await fetch(`${API_URL}/api/topics/${topicId}/messages`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            AIRLINGO_ACCESS_TOKEN
          )}`,
        },
      });
      const data = await resp.json();
      setData(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteMessage = async () => {
    if (localStorage.getItem(AIRLINGO_ACCESS_TOKEN)) {
      const resp = await fetch(`${API_URL}/api/topics/${topicId}/messages`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(
            AIRLINGO_ACCESS_TOKEN
          )}`,
        },
      });
      getData();
    }
  };

  const popover = (e) => {
    setShow(!show);
    setTarget(e.target);
  };

  return (
    <div>
      {data?.messages?.map((topic) => (
        <div key={topic.id}>
          <div
            className={
              topic.type !== "FromUser"
                ? "actual-message-container all"
                : "onRight all"
            }
          >
            <TiDelete
              style={{
                height: "2rem",
                width: "2rem",
                color: "white",
              }}
              onClick={() => deleteMessage(topic.id)}
            />
            {topic.type === "FromUser" ? (
              <div ref={ref}>
                <div style={{ cursor: "pointer" }} onClick={popover}>
                  <h2>{topic.type}</h2>
                  <h3>{topic.text}</h3>
                  <p>{topic.creationTime}</p>
                  <Overlay
                    show={show}
                    target={target}
                    placement="bottom"
                    container={ref}
                    containerPadding={20}
                  >
                    <Popover
                      id="popover-contained"
                      style={{
                        background: "#ffffff",
                        color: "#000",
                        overflow: "hidden",
                        borderRadius: "7px",
                        fontSize: "1.5rem",
                      }}
                    >
                      <Popover.Header
                        as="h3"
                        style={{
                          background: "#00ace6",
                          padding: "15px",
                          borderRadius: "#7px",
                          width: "100%",
                          fontWeight: "bold",
                          fontSize: "1.5rem",
                        }}
                      >
                        May be you are trying to say
                      </Popover.Header>
                      <Popover.Body style={{ height: "5rem", padding: "15px" }}>
                        <strong>
                          Please wait, I will look for your reservation
                        </strong>
                      </Popover.Body>
                      <GiSpeaker
                        style={{
                          marginLeft: "2rem",
                          border: "1px solid black",
                          padding: "2px",
                          borderRadius: "50%",
                        }}
                      />
                      <Popover.Body
                        style={{
                          background: "",
                        }}
                      >
                        <strong>Let's try! your turn now</strong>
                      </Popover.Body>
                    </Popover>
                  </Overlay>{" "}
                </div>
              </div>
            ) : (
              <>
                <h2>{topic.type}</h2>
                <h3>{topic.text}</h3>
                <p>{topic.creationTime}</p>
              </>
            )}
          </div>
        </div>
      ))}

      <ChatMessageInput
        className="ChatMessageInputField"
        data={data}
        onMessagePost={() => getData()}
      />
    </div>
  );
};
export default ChatPage;
