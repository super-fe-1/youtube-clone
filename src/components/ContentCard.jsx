import formatViewCount from "../utils/formatViewCount";
import formatTimestampToRelativeTime from "../utils/formatTimestampToRelativeTime";
import { CiMenuKebab } from "react-icons/ci";

const ContentCard = ({ content }) => {
  return (
    <article>
      <img
        className="w-full rounded-lg min-w-72 aspect-video"
        src={content.imgUrl}
        alt={content.title}
      />
      <div className="flex gap-2 pt-2">
        <img
          className="w-10 h-10 rounded-full"
          src={content.imgUrl}
          alt="Profile"
        />
        <div className="w-full">
          <div className="flex items-start justify-between">
            <h2 className="font-semibold line-clamp-2">{content.title}</h2>
            <button className="pt-1 pl-2 cursor-pointer">
              <CiMenuKebab />
            </button>
          </div>
          <div className="text-sm text-secondary">
            <span>{content.channel}</span>
            <div className="flex gap-1">
              <span>조회수 {formatViewCount(content.views)}</span>
              <span>•</span>
              <span>{formatTimestampToRelativeTime(content.date)}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ContentCard;
