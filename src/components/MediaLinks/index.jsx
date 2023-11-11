import './style.css';

export const MediaLinks = ({ linkedinLink, githubLink }) => {
  return (
    <div className="icons">
      <a href={linkedinLink}>
        <img src="/images/linkedin.png" className="icon"></img>
      </a>
      <a href={githubLink}>
        <img src="/images/github.png" className="icon"></img>
      </a>
    </div>
  );
};
