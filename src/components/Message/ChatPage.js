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
import Loader from "../Loader/Loader";

const ChatPage = () => {
  // const data = useLoaderData()
  const [data, setData] = useState({ messages: [] });
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef(null);
  const { topicId } = useParams();

  const getData = async () => {
    setIsLoading(true);
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
    setIsLoading(false);
  };

  const renderLoading = () => {
    if (isLoading) {
      return (
        <div>
          <Loader />
        </div>
      );
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
    <div className="ChatPage_Container">
      <div style={{ paddingBottom: "5rem" }}>
        {data?.messages?.map((topic) => (
          <div key={topic.id}>
            <div
              className={
                topic.type === "FromUser"
                  ? "onRight all"
                  : topic.type === "Information"
                  ? "onCenter all"
                  : "actual-message-container all"
              }
            >
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
                          fontSize: "1.3rem",
                        }}
                      >
                        <Popover.Header
                          as="h3"
                          style={{
                            background: "#00ace6",
                            padding: "15px",
                            fontWeight: "bold",
                            fontSize: "1.5rem",
                          }}
                        >
                          {data.messages[1].metrics.sentiment}
                        </Popover.Header>
                        <Popover.Body className="ChatPage_PopoverBody">
                          <strong>
                            {
                              data.messages[1].metrics[
                                "general-recommendations"
                              ]
                            }
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
                            fontSize: "1.2rem",
                          }}
                        >
                          <p>Let's try! your turn now</p>
                        </Popover.Body>
                      </Popover>
                    </Overlay>
                  </div>
                </div>
              ) : topic.type === "Information" ? (
                <>
                  <h3 style={{ fontWeight: "bold" }}>{topic.type}</h3>
                  <p style={{ color: "#000" }}>{topic.text}</p>
                </>
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
        {renderLoading()}
      </div>
      <ChatMessageInput
        className="ChatMessageInputField"
        data={data}
        onMessagePost={() => getData()}
        renderLoading={renderLoading()}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />

      {data?.messages?.map((topic) => (
        <button
          key={topic.id}
          onClick={() => deleteMessage(topic.id)}
          className="deleteButton"
        >
          Delete all messages!
        </button>
      ))}
    </div>
  );
};
export default ChatPage;
