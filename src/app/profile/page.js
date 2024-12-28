"use client";

import UserProfileInfo from "@/components/templates/Profile";
import EditAccountInfo from "@/components/templates/Profile/EditAccountInfo";
import EditBankInfo from "@/components/templates/Profile/EditBankInfo";
import EditPersonalInfo from "@/components/templates/Profile/EditPersonalInfo";
import { useAuth } from "@/context/AuthProvider";
import { useState } from "react";

function Profile() {
  const { user } = useAuth();
  const [page, setPage] = useState(1);

  return (
    <div>
      {page === 1 && <UserProfileInfo user={user} setPage={setPage} />}
      {page === 2 && <EditAccountInfo user={user} setPage={setPage}/>}
      {page === 3 && <EditPersonalInfo user={user} setPage={setPage}/>}
      {page === 4 && <EditBankInfo user={user} setPage={setPage}/>}
    </div>
  );
}

export default Profile;
