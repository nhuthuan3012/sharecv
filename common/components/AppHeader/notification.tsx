// "use client";
// import {
//   Badge,
//   Box,
//   ClickAwayListener,
//   Divider,
//   Fade,
//   IconButton,
//   Paper,
//   Popper,
//   PopperPlacementType,
//   Typography,
// } from "@mui/material";
// import { NotificationsNone } from "@mui/icons-material";
// import { useEffect, useRef, useState } from "react";
// import classNames from "classnames";
// import { INotification } from "@/common/types";
// import {
//   allUnreadCount,
//   getNotifications,
//   markAllAsRead,
//   markAsRead,
// } from "@/apis/notification";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import dayjs from "dayjs";
// import { getProfileCookies } from "@/common/helpers/authCookies";
// import { useRouter } from "next/navigation";

// function getNotiUrl(role: string, data: INotification) {
//   let prefix = "";
//   let type = "";
//   let status = "";
//   if (role === "admin" || role === "superadmin") {
//     prefix = "/admin";
//     if (data.type === "event") {
//       type = "/events-manage";
//       if (data.status === "Pending") {
//         status = "/pending";
//       } else if (data.status === "Accepted") {
//         status = "/accepted";
//       } else if (data.status === "Rejected") {
//         status = "/rejected";
//       } else if (data.status === "sponsor") {
//         status = "/sponsorships";
//         type = "";
//       }
//     } else if (data.type === "blog") {
//       type = "/blogs/manage";
//       if (data.status === "Pending") {
//         status = "/pending";
//       } else if (data.status === "Accepted") {
//         status = "/accepted";
//       } else if (data.status === "Rejected") {
//         status = "/rejected";
//       }
//     }
//   } else if (role === "organization") {
//     prefix = "";
//     if (data.type === "event") {
//       type = "/my-events";
//       if (data.status === "Denied") {
//         status = "/denied";
//       } else if (data.status === "Approved") {
//         type = "/events";
//       } else if (data.status === "Waiting") {
//         status = "/waiting";
//       }
//     } else if (data.type === "blog") {
//       type = "/my-blogs";
//       if (data.status === "Denied") {
//         status = "/denied";
//       } else if (data.status === "Approved") {
//         type = "/blogs";
//       } else if (data.status === "Waiting") {
//         status = "/waiting";
//       }
//     }
//   }
//   return prefix + type + status + "/" + data.item_id;
// }

// function Notification({ position }: { position: PopperPlacementType }) {
//   const router = useRouter();
//   const [role, setRole] = useState<string>("" as string);
//   const [open, setOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

//   const [notifications, setNotifications] = useState<INotification[]>([]);
//   const [totalItem, setTotalItem] = useState<number>(0);
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);
//     setOpen((previousOpen) => !previousOpen);
//   };

//   const [tabValue, setTabValue] = useState(0);
//   const [offset, setOffset] = useState(0);
//   const [unreadCount, setUnreadCount] = useState<number | null>();
//   const [isFetching, setIsFetching] = useState(false);

//   const handleScroll = async (e: React.UIEvent<HTMLDivElement>) => {
//     const element = e.target as HTMLDivElement;
//     if (
//       element.scrollTop + element.clientHeight > element.scrollHeight - 5 &&
//       notifications.length < totalItem &&
//       !isFetching
//     ) {
//       // User has scrolled to the bottom
//       const status =
//         tabValue === 0 ? undefined : tabValue === 1 ? "read" : "unread";
//       setIsFetching(true);
//       const new_notifications = await getNotifications(offset + 5, 5, status);
//       setNotifications((prev) => [...prev, ...new_notifications.data]);
//       setOffset(offset + 5);
//       setIsFetching(false);
//     }
//   };
//   useEffect(() => {
//     setOffset(0);
//     const status =
//       tabValue === 0 ? undefined : tabValue === 1 ? "read" : "unread";
//     getNotifications(0, 5, status).then((res) => {
//       setNotifications(res.data);
//       setTotalItem(res.metadata.total_notifications);
//     });
//   }, [tabValue]);

//   useEffect(() => {
//     allUnreadCount().then((res) => {
//       if (res.data > 0) {
//         setUnreadCount(res.data);
//       }
//     });
//     getProfileCookies().then((res) => {
//       setRole(res.role as string);
//     });
//   }, []);

//   const changeReadStatus = async (index: number) => {
//     if (!notifications[index].is_read) {
//       setUnreadCount(unreadCount! - 1);
//       const newNotifications = [...notifications];
//       newNotifications[index].is_read = true;
//       if (tabValue === 2) {
//         newNotifications.splice(index, 1);
//       }
//       await markAsRead(notifications[index].id);
//       setNotifications(newNotifications);
//     }
//   };

//   const changeAllRead = async () => {
//     let newNotifications;
//     if (tabValue === 2) newNotifications = [] as INotification[];
//     else {
//       newNotifications = notifications.map((item) => {
//         return { ...item, is_read: true };
//       });
//     }
//     setUnreadCount(0);
//     await markAllAsRead();
//     setNotifications(newNotifications);
//   };
//   return (
//     <div>
//       <IconButton onClick={handleClick}>
//         {notifications?.length > 0 ? (
//           <Badge badgeContent={unreadCount} color="error">
//             <NotificationsNone fontSize="medium" />
//           </Badge>
//         ) : (
//           <NotificationsNone fontSize="medium" />
//         )}
//       </IconButton>
//       <Popper
//         sx={{ zIndex: 1200 }}
//         open={open}
//         anchorEl={anchorEl}
//         placement={position}
//         transition
//         modifiers={[
//           {
//             name: "offset",
//             options: {
//               offset: [0, 10],
//             },
//           },
//         ]}
//       >
//         {({ TransitionProps }) => (
//           <ClickAwayListener onClickAway={() => setOpen(false)}>
//             <Fade {...TransitionProps} timeout={350}>
//               <Paper
//                 sx={{
//                   width: "400px",
//                 }}
//               >
//                 <div className="p-5 shadow-md rounded-md min-h-96">
//                   <div className="flex justify-between space-x-10 items-center">
//                     <p className="font-bold text-xl">Thông báo </p>
//                     <div className="flex items-center">
//                       <p
//                         onClick={() => changeAllRead()}
//                         className=" hover:text-sky-500 cursor-pointer"
//                       >
//                         {" "}
//                         Đánh dấu tất cả là đã đọc{" "}
//                       </p>
//                     </div>
//                   </div>
//                   <Box display="flex" flex={1}>
//                     <Box
//                       borderRight={1}
//                       borderColor="divider"
//                       width="80px"
//                       sx={{
//                         "&:hover": {
//                           cursor: "pointer",
//                         },
//                       }}
//                       onClick={() => setTabValue(0)}
//                     >
//                       <Typography
//                         className={classNames(
//                           "text-base text-center p-[2px]",
//                           tabValue === 0 ? "font-bold text-primary" : ""
//                         )}
//                       >
//                         Tất cả
//                       </Typography>
//                     </Box>
//                     <Box
//                       borderRight={1}
//                       borderColor="divider"
//                       width="80px"
//                       sx={{
//                         "&:hover": {
//                           cursor: "pointer",
//                         },
//                       }}
//                       onClick={() => setTabValue(1)}
//                     >
//                       <Typography
//                         className={classNames(
//                           "text-base text-center p-[2px]",
//                           tabValue === 1 ? "font-bold text-primary" : ""
//                         )}
//                       >
//                         Đã đọc
//                       </Typography>
//                     </Box>
//                     <Box
//                       width="90px"
//                       sx={{
//                         "&:hover": {
//                           cursor: "pointer",
//                         },
//                       }}
//                       onClick={() => setTabValue(2)}
//                     >
//                       <Typography
//                         className={classNames(
//                           "text-base text-center p-[2px]",
//                           tabValue === 2 ? "font-bold text-primary" : ""
//                         )}
//                       >
//                         Chưa đọc
//                       </Typography>
//                     </Box>
//                   </Box>
//                   <div
//                     onScroll={handleScroll}
//                     className="max-h-[400px] bg-[#CBD5E1] overflow-y-scroll"
//                   >
//                     {notifications?.map((item, index) => {
//                       const url = getNotiUrl(role, item);
//                       return (
//                         <Box
//                           className="p-2 hover:cursor-pointer"
//                           key={index}
//                           onClick={() => {
//                             setOpen(false);
//                             router.push(url);
//                           }}
//                         >
//                           <div
//                             style={{
//                               backgroundColor: !item.is_read
//                                 ? "white"
//                                 : "#EDF3FF",
//                             }}
//                             className="flex justify-between items-center p-2 rounded my-2"
//                           >
//                             <div className="flex items-center space-x-2 w-full">
//                               <div className="w-full">
//                                 <div className="flex justify-between">
//                                   <div className="font-bold">
//                                     {item.title}
//                                     {item.is_read ? null : (
//                                       <MoreHorizIcon color="error" />
//                                     )}
//                                   </div>
//                                   <div className="text-end">
//                                     {dayjs(item.created_at).format(
//                                       "DD/MM/YYYY"
//                                     )}
//                                   </div>
//                                 </div>
//                                 <p className="text-sm max-w-[300px]">
//                                   {item.description}
//                                 </p>
//                                 {!item.is_read && (
//                                   <button
//                                     onClick={() => changeReadStatus(index)}
//                                     className="rounded-md bg-sky-500 border-none p-2 hover:bg-sky-600 cursor-pointer text-white"
//                                   >
//                                     Đánh dấu đã đọc{" "}
//                                   </button>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         </Box>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </Paper>
//             </Fade>
//           </ClickAwayListener>
//         )}
//       </Popper>
//     </div>
//   );
// }

// export default Notification;
