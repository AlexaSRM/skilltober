import React from "react";
import { Widget } from "@typeform/embed-react";

export default function Register() {
    return (
      <div id="submit">
        <Widget id={process.env.NEXT_PUBLIC_TYPEFORM_ID ?? 'NULL'} className="h-screen" />
      </div>
    );
  }