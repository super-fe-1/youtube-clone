import { useState } from "react";
import "../modal.css";
import { PiVideoCameraLight } from "react-icons/pi";
import { TbBell } from "react-icons/tb";
import { IoPersonCircleOutline } from "react-icons/io5";
const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [action, setAction] = useState("");

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  const handleActionClick = () => {};

  return (
    <div>
      <div className="modal">
        <a onClick={toggleModal}>
          <PiVideoCameraLight />
        </a>
        <a>
          <TbBell />
        </a>
        <a>
          <IoPersonCircleOutline />
        </a>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={() => handleActionClick("동영상 업로드")}>
              동영상 업로드
            </button>
            <button onClick={() => handleActionClick("라이브 스트리밍 시작")}>
              라이브 스트리밍 시작
            </button>
            <button onClick={() => handleActionClick("게시물 작성")}>
              게시물 작성
            </button>
          </div>
        </div>
      )}

      <span className="category">전체</span>
    </div>
  );
};

export default Modal;
