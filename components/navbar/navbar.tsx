"use client";
import { useRouter } from "next/router";
import { Navbar } from "@nextui-org/react";
import React from "react";
import { useTheme as useNextTheme } from "next-themes";
import { useTheme } from "@nextui-org/react";

export const Nav = () => {
  const router = useRouter();
  const { isDark, type } = useTheme();
  const navigation = [
    { title: "Homepage", link: "/home" },
    { title: "Hotel", link: "/hotel" },
    { title: "Project", link: "/project" },
    { title: "Acitivities", link: "/activity" },
    { title: "Involved", link: "/involved" },
    { title: "Contact", link: "/contact" },
  ];
  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Brand>
        <Navbar.Content
          activeColor="primary"
          variant="highlight-solid-rounded"
          hideIn="sm"
          css={{
            pl: "6rem",
          }}
        >
          {navigation.map((item, index) => {
            if (router.asPath === item.link) {
              return (
                <Navbar.Link isActive key={index} href={item.link}>
                  {item.title}
                </Navbar.Link>
              );
            } else {
              return (
                <Navbar.Link key={index} href={item.link}>
                  {item.title}
                </Navbar.Link>
              );
            }
          })}
        </Navbar.Content>
      </Navbar.Brand>
    </Navbar>
  );
};
