"use client";

import { useFormStatus } from "react-dom";

const UpdateButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-main text-white p-2 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed max-w-96"
    >
      {pending ? "Actualizando..." : "Actualizar"}
    </button>
  );
};

export default UpdateButton;