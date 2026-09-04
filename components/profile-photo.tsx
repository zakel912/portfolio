import { profile } from "@/content/profile";
import { publicAsset } from "@/lib/paths";

export function ProfilePhoto() {
  return (
    <div
      className="profile-photo"
      role="img"
      aria-label="Zakaria El Mrani"
      style={{ backgroundImage: `url("${publicAsset(profile.profileImage)}"), url("${publicAsset("/profile-placeholder.svg")}")` }}
    />
  );
}
