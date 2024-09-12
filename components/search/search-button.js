import { connect, styled } from "frontity";
import React from "react";
import { SearchIcon } from "../icons";
import {
  BaseToggle,
  LabeledIcon,
  ToggleWrapper,
} from "../navigation/nav-toggle";
import { mq } from "../layout";

const SearchButton = ({ state, actions }) => {
  // Get the state of the search modal
  const { isSearchModalOpen } = state.theme;
  const { openSearchModal } = actions.theme;

  return (
    <HeaderToggle>
      <ToggleWrapper>
        <BaseToggle
          aria-expanded={isSearchModalOpen}
          onClick={openSearchModal}
          aria-label="Click para abrir la barra de búsqueda..."
          style={{ bottom: "0.5rem" }}
        >
          <LabeledIcon icon={SearchIcon} label="Buscar" />
        </BaseToggle>
      </ToggleWrapper>
    </HeaderToggle>
  );
};

export default connect(SearchButton);

const HeaderToggle = styled.div`
  display: none;

  @include mq(lg) {
    display: block;
  }
`;
