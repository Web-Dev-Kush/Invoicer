import React from "react";

export default function ClientDetails({clientName, clientAddress}) {
  return (
    <>
      <section className="mt-5">
        <h2 className="font-bold text-xl uppercase">{clientName}</h2>
        <p className="font-bold">{clientAddress}</p>
      </section>
    </>
  );
}
