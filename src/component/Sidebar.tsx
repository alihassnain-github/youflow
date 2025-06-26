import { RiHistoryLine, RiHome4Line, RiMenuLine, RiMovieLine, RiSettings3Line, RiThumbUpLine, RiUserFollowLine } from "@remixicon/react";
import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn btn-ghost btn-circle drawer-button">
                    <RiMenuLine />
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li>
                        <Link href={"/"}>
                            <RiHome4Line size={18} />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            <RiHistoryLine size={18} />
                            History
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            <RiThumbUpLine size={18} />
                            Liked Videos
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            <RiMovieLine size={18} />
                            Your Videos
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            <RiUserFollowLine size={18} />
                            Subscriptions
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            <RiSettings3Line size={18} />
                            Settings
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}