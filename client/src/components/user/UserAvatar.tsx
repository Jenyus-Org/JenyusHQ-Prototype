import {
  Avatar,
  AvatarProps,
  Badge,
  BadgeProps,
  makeStyles,
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles((theme) => ({
  badge: {
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
  online: {
    backgroundColor: "#44b700",
    color: "#44b700",
    "&::after": {
      animation: "$ripple 1.2s infinite ease-in-out",
    },
  },
  offline: {
    backgroundColor: "#c0c0c0",
    color: "#888888",
  },
}));

interface AvatarBadgeProps {
  status: "ONLINE" | "OFFLINE";
}

function AvatarBadge({ status, ...props }: AvatarBadgeProps & BadgeProps) {
  const classes = useStyles();

  return (
    <Badge
      {...props}
      classes={{
        badge: clsx(classes.badge, {
          [classes.offline]: status === "OFFLINE",
          [classes.online]: status === "ONLINE",
        }),
      }}
    ></Badge>
  );
}

interface UserAvatarProps {
  status: "ONLINE" | "OFFLINE";
}

function UserAvatar({
  status,
  ...props
}: UserAvatarProps & AvatarProps) {
  return (
    <AvatarBadge
      overlap="circle"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      variant="dot"
      status={status}
    >
      <Avatar {...props}>
        {props.children}
      </Avatar>
    </AvatarBadge>
  );
}

export default UserAvatar;
