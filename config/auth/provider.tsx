"use client";

import { createContext, useEffect, useRef, useState } from "react";
import { TProfileContext, TProfilerProps } from "./types";

export const ProfileContext = createContext<TProfileContext>({
  isAuth: false,
  cartItems: [],

  onSuccess: () => {},
});

export const ProfileProvider = ({ children, ...value }: TProfilerProps) => {
  const [onSuccess, setOnSuccess] = useState<(() => void) | null>(null);

  return (
    <ProfileContext.Provider
      value={{ ...(value as TProfileContext), onSuccess, setOnSuccess }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
