import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  NavbarBrand
} from "reactstrap";
import { regions } from '../../data/Regions';
import './navbar.css';

const Navbar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="navbar">
      <Nav className="navbar__items" tabs>
        {/* <NavItem>
          <NavbarBrand href="/" className="navbar__link">BRAND</NavbarBrand>
        </NavItem> */}
        <NavItem>
          <NavLink href="/" className="navbar__link">Home</NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle className="navbar__link" nav caret>
            Regions
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Find Your Region
            {/* href points to interactive map */}
            </DropdownItem>

            {regions.map(r => <Link to={`/${r.regionURL}`} key={r.regionID}><DropdownItem className="navbar__link">{r.region}</DropdownItem></Link>)}

          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="/contact" className="navbar__link">Get in Touch with NSYEP Sites</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="navbar__link">Link</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navbar;
