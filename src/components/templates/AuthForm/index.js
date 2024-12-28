"use client";

import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useState } from "react";
import ModalContainer from "@/components/partials/ModalContainer";
import { useAuth } from "@/context/AuthProvider";

function AuthForm() {
  const { step } = useAuth();
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState(null);

  return (
    <div>
      {step === 1 && (
        <ModalContainer>
          <SendOTPForm mobile={mobile} setMobile={setMobile} setCode={setCode}/>
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer>
          <CheckOTPForm mobile={mobile} code={code}/>
        </ModalContainer>
      )}
    </div>
  );
}

export default AuthForm;
