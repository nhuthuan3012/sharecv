import { ICart, ICartItems } from "@/common/interfaces";
import { Dispatch, ReactNode, SetStateAction } from "react";

export type TProfileContext = {
  isAuth: boolean;

  cart?: ICart;

  cartItems: ICartItems;

  onSuccess?: (() => void) | null;

  setOnSuccess?: Dispatch<SetStateAction<(() => void) | null>>;
};

export type TProfilerProps = Partial<TProfileContext> & {
  children: ReactNode;
};
