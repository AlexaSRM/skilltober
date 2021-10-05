import * as typeFormEmbed from "@typeform/embed";
import { useRef, useEffect } from "react";
import React from "react";

export default function Register() {
    const typeFormRef = useRef(null);
    useEffect(() => {
      if (typeFormRef.current) {
        typeFormEmbed.makeWidget(
          typeFormRef.current,
          process.env.NEXT_PUBLIC_TYPEFORM_URL,
          {
            hideFooter: false,
            hideHeaders: false,
            opacity: 100,
          }
        );
      }
    }, []);
    return (
      <div id="submit">
        <div ref={typeFormRef} style={{ height: "100vh", width: "100%" }}></div>
      </div>
    );
  }