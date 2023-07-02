import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Notes from "./components/Notes";
import Tables from "./components/Tables";
import MainDetails from "./components/MainDetails";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, seClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");

  function handlePrint() {
    window.print();
  }
  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {showInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />
            <MainDetails name={name} address={address} />
            <ClientDetails clientName={clientName} clientAddress={clientAddress} />
            <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
            <Tables />
            <Notes notes={notes} />
            <Footer name={name} email={email} website={website} bankName={bankName} bankAccount={bankAccount} phone={phone} />
            <button
              onClick={() => setShowInvoice(false)}
              className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            >
              Edit Information
            </button>
          </div>
        ) : (
          <>
            {/* name, address, email, phone, bank name, 
          bank account number, website, client name, client address, invoice number,'
          invoice date, due date, notes */}
            <div className="flex flex-col justify-center">
              <label htmlFor="name">Enter your name:</label>
              <input
                type="text"
                name="text"
                id="name"
                placeholder="Enter your name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="address">Enter your address:</label>
              <input
                type="text"
                name="text"
                id="address"
                placeholder="Enter your address"
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label htmlFor="email">Enter your email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="phone">Enter your Phone:</label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Enter your Phone"
                autoComplete="off"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label htmlFor="website">Enter your webSite:</label>
              <input
                type="url"
                name="website"
                id="website"
                placeholder="Enter your website"
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
              <label htmlFor="bankName">Enter your Bank Name:</label>
              <input
                type="text"
                name="bankName"
                id="bankName"
                placeholder="Enter your Bank Name"
                autoComplete="off"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
              <label htmlFor="bankAccount">Enter your Account Number:</label>
              <input
                type="number"
                name="bankAccount"
                id="bankAccount"
                placeholder="Enter your Account Number"
                autoComplete="off"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
              />
              <label htmlFor="clientName">Enter Client Name:</label>
              <input
                type="text"
                name="clientName"
                id="clientName"
                placeholder="Enter Client Name"
                autoComplete="off"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
              <label htmlFor="clientAddress">Enter Client Address:</label>
              <input
                type="text"
                name="clientAddress"
                id="clientAddress"
                placeholder="Enter Client Address"
                autoComplete="off"
                value={clientAddress}
                onChange={(e) => seClientAddress(e.target.value)}
              />
              <label htmlFor="invoiceNumber">Invoice Number:</label>
              <input
                type="number"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder="Invoice Number"
                autoComplete="off"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
              <label htmlFor="invoiceDate">Invoice Date:</label>
              <input
                type="date"
                name="invoiceDate"
                id="invoiceDate"
                placeholder="Invoice Date"
                autoComplete="off"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
              <label htmlFor="dueDate">Due Date:</label>
              <input
                type="date"
                name="dueDate"
                id="dueDate"
                placeholder="Due Date"
                autoComplete="off"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
              <label htmlFor="notes">Additional Notes:</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Additional Notes to Client..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
              <button
                onClick={() => setShowInvoice(true)}
                className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow 
                border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
