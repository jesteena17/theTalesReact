import { createSelector } from "reselect";

const selectMainmenu=state=>state.mainmenu;

export const selectMainmenuSections=createSelector([selectMainmenu],
    mainmenu=>mainmenu.sections
     )