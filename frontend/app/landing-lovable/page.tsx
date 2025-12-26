import { redirect } from "next/navigation";

// Route sandbox legacy — redirected to home
export default function LandingLovableRedirect() {
    redirect("/");
}
