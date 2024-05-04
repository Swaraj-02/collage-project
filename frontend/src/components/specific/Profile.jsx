import { Avatar, Stack, Typography } from "@mui/material";
import {
  // Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import RecyclingIcon from "@mui/icons-material/Recycling";
import PersonIcon from "@mui/icons-material/Person";
import moment from "moment";
import { transformImage } from "../../lib/features";

const Profile = ({ user }) => {
  return (
    <>
      {" "}
      <Stack
        direction={"column"}
        alignItems={"center"}
        style={{ backgroundColor: "#fff", width: "30%" }}
      >
        <Avatar
          src={transformImage(user?.avatar?.url)}
          sx={{
            width: 50,
            height: 50,
            objectFit: "contain",
            marginBottom: "1rem",
            border: "2px solid #551ABB",
          }}
        />
      </Stack>
      <Stack direction={"column"} spacing={"1.5rem"}>
        {" "}
        {/*   add to stack*/}
        <hr
          style={{
            height: "3px",
            width: "100%",
            background: "#551ABB",
            border: "none",
          }}
        />
        <ProfileCard
          heading={"Username"}
          text={user?.username}
          Icon={<UserNameIcon />}
        />
        <ProfileCard
          text={`${user?.bio}`}
          heading={"Bio"}
          Icon={<RecyclingIcon />}
        />
        <ProfileCard heading={"Name"} text={user?.name} Icon={<PersonIcon />} />
        <ProfileCard
          heading={"Joined"}
          text={moment(user?.createdAt).fromNow()}
          Icon={<CalendarIcon />}
        />
      </Stack>
    </>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "4rem",
      // justifyContent: "space-between",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",

        // justifyContent: "center" ,
      }}
    >
      {Icon && <span style={{ marginRight: "0.5rem" }}>{Icon}</span>}
      <span>{heading}</span>
    </div>

    {/* Content (icon and text) on the right */}
    <div>
      <span style={{ fontSize: "1.2rem", color: "purple" }}>{text}</span>
    </div>
  </div>
);

export default Profile;
