import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../modal.css";
import { PiVideoCameraLight } from "react-icons/pi";
import { TbBell } from "react-icons/tb";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";

const Modal = () => {
  const isLogged = useSelector((state) => state.user.isLogged);

  const [isVideoDropdownOpen, setIsVideoDropdownOpen] = useState(false);
  const [isAlertDropdownOpen, setIsAlertDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleVideoDropdown = () => {
    setIsVideoDropdownOpen((prev) => !prev);
    setIsAlertDropdownOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const toggleAlertDropdown = () => {
    setIsAlertDropdownOpen((prev) => !prev);
    setIsVideoDropdownOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prev) => !prev);
    setIsVideoDropdownOpen(false);
    setIsAlertDropdownOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    window.location.reload();
  };

  return (
    <div>
      <div className="modal">
        {isLogged && (
          <>
            <button onClick={toggleVideoDropdown} className="icon">
              <PiVideoCameraLight />
            </button>

            <button onClick={toggleAlertDropdown} className="icon">
              <TbBell />
            </button>
          </>
        )}
        <button className="icon" onClick={toggleProfileDropdown}>
          <IoPersonCircleOutline />
        </button>
      </div>

      {isVideoDropdownOpen && (
        <div className="video-menu">
          <button className="video-item">동영상 업로드</button>
          <button className="video-item">라이브 스트리밍 시작</button>
          <button className="video-item">게시물 작성</button>
        </div>
      )}

      {isAlertDropdownOpen && (
        <div className="alert-menu">
          <header className="alert-item">
            <div>알림</div>
            <div className="system-icon">
              <CiSettings />
            </div>
          </header>
          <div className="alert-container">
            <div className="alert-icon">
              <TbBell />
            </div>
            <div className="alert-text">
              <div>여기에 알림이 표시됩니다.</div>
              <div>
                즐겨찾는 채널을 구독하여 최신 동영상의 알림을 받아 보세요.
              </div>
            </div>
          </div>
        </div>
      )}

      {isProfileDropdownOpen && (
        <div className="profile-menu">
          {!isLogged ? (
            <Link to={"/login"} className="profile-item">
              로그인
            </Link>
          ) : (
            <button onClick={handleLogout} className="profile-item">
              로그아웃
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Modal;
