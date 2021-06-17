import { GithubLink } from "./GithubLink";
import styles from "../../auth.module.css";

export const Footer = () => {
  return (
    <footer className={styles.copyrights}>
      &#169; <GithubLink url="https://github.com/ruljin" profileName="Ruljin" />{" "}
      & <GithubLink url="https://github.com/Ulwothar" profileName="Ulwothar" />,
      All rights reserved
    </footer>
  );
};
