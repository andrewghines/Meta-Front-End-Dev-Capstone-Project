import NavLinks from "../Components/NavLinks";
import { HiMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const MobileNavigation = () => {

    const [open, handleOpen] = useState(false);
    const hamburgerIcon = <HiMenu id="hamburger" size={'40px'} onClick={() => handleOpen(!open)}/>;
    const closeIcon = <GrClose id="close" size={'40px'} onClick={() => handleOpen(!open)}/>;

    return (
        <nav id="mobile-navigation">
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks />}
        </nav>
    )
}

export default MobileNavigation;