import { useState } from "react";

function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  return `${year}`;
}

function Footer() {
  const [currentDate] = useState(getDate());

  return <p className="footer">&copy; 2023 - {currentDate} Marie Daake</p>;
}
export default Footer;
