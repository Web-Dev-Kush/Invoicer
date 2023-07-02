import React from "react";

function Footer({ name, email, phone, website, bankName, bankAccount }) {
  return (
    <div>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Your Name:</span>
            {name}
          </li>
          <li>
            <span className="font-bold">Your Email:</span>
            {email}
          </li>
          <li>
            <span className="font-bold">Phone:</span>
            {phone}
          </li>
          <li>
            <span className="font-bold">Bank:</span>
            {bankName}
          </li>
          <li>
            <span className="font-bold">Account Holder Name:</span>
            {name}
          </li>
          <li>
            <span className="font-bold">Account Number:</span>
            {bankAccount}
          </li>
          <li>
            <span className="font-bold">Website:</span>
            {website}
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
