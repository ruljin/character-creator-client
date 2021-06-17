import styles from "../../auth.module.css";

export const GithubLink = ({ url, profileName }) => {
  return (
    <a className={styles.link} href={url} target="_blank" rel="noreferrer">
      {profileName}
    </a>
  );
};
