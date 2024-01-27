// "use client";

// import { PropsWithChildren, useState } from "react";
// import {
//   Hydrate,
//   QueryClient,
//   QueryClientProvider,
// } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// export const ReactQueryProvider = ({
//   children,
//   state,
// }: PropsWithChildren & { state: any }) => {
//   const [queryClient] = useState(() => new QueryClient());

//   return (
//     <QueryClientProvider client={queryClient}>
//       <Hydrate state={state}>{children}</Hydrate>
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// };

export {};
