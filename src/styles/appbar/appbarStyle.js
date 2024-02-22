import { List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box }from "@mui/system";
import { Colors } from "../theme/Theme";
import "@fontsource/montez";

const AppbarContainer = styled(Box)(() => ({
    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px',

}))


// header

const AppbarHeader = styled(Typography)(()=> ({
    padding: '4px',
    flexGrow: 1,
    fontSize: '4em',
    fontFamily: '"Montez", "cursive"',
    color: Colors.secondary,
}))

const MyList = styled(List)(({type}) =>({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justifyContent: 'center',
    alignItems: 'center',
}))

const ActionIconsContainerMobile = styled(Box)(() => ({
    display: 'flex',
    background: Colors.shaft,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,
    borderTop: `1px solid ${Colors.border}`

}))

const ActionIconsContainerDesktop = styled(Box)(() => ({
    flexGrow: 0
}))

export { 
    AppbarContainer, 
    AppbarHeader, 
    MyList, 
    ActionIconsContainerDesktop,  
    ActionIconsContainerMobile,
}