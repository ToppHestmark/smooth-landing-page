import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBthWrap,
} from "./styles/sidebar";

export default function Sidebar({ isOpen, toggleHamburger }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleHamburger}>
      <Icon onClick={toggleHamburger}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggleHamburger}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggleHamburger}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggleHamburger}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggleHamburger}>
            Sign up
          </SidebarLink>
        </SidebarMenu>
        <SideBthWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBthWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
