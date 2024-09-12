import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import NavList from "./nav-list";
import { mq } from "@/components/grid";
import { MenuItem } from "@/lib/auxiliar";
/**
 * Navigation Component
 *
 * It renders the navigation links
 */

interface NavigationProps {
  items?: MenuItem[] | any[];
  split?: boolean;
  isMain?: boolean;
  color?: string;
  bgColor?: string;
  borderColor?: string;
}

const Navigation = ({
  items = [],
  split = false,
  isMain = true,
  color,
  bgColor,
  borderColor,
  ...props
}: NavigationProps) => {
  return items.length ? (
    <Menu {...props}>
      <Container split={split}>
        {!split ? (
          <Block>
            <>
              <NavList
                items={items}
                isMain={isMain}
                color={color}
                bgColor={bgColor}
                borderColor={borderColor}
              />
            </>
          </Block>
        ) : (
          items.map((el, index) => {
            const item = el.item;
            const children = el.children;

            return children ? (
              <Block key={index}>
                <NavigationLabel>{item?.attributes?.title}</NavigationLabel>

                <NavList
                  items={children}
                  isMain={isMain}
                  color={color}
                  bgColor={bgColor}
                  borderColor={borderColor}
                />
              </Block>
            ) : null;
          })
        )}
      </Container>
    </Menu>
  ) : null;
};

export default Navigation;

const Block = styled.div`
  margin-bottom: 2rem;
`;

const Menu = styled.div`
  margin: 0;
`;

const Container = styled.div`
  ${(props: { split?: boolean }) => css`
    padding: 0;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 100%;
    ${props.split
      ? css`
          @include mq(lg) {
            grid-template-columns: 48% 48%;
          }
          @include mq(xl) {
            grid-template-columns: 33.333333% 33.333333% 33.333333%;
          }
        `
      : css``}
  `}
`;

const NavigationLabel = styled.span`
  ${(props: { labelColor?: string }) => css`
    color: ${props.labelColor};
    font-weight: bold;
    text-transform: uppercase;
  `}
`;
