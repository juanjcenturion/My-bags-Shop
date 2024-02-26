import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar/appbarStyle";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";


export default function AppbarDesktop ({matches}) {

    
    return(
            <AppbarContainer>
                <AppbarHeader>I tech</AppbarHeader>
                <MyList type='row'>
                    <ListItemText primary='Home'/>
                    <ListItemText primary='Categories'/>
                    <ListItemText primary='Products'/>
                    <ListItemText primary='Contact Us'/>
                    <ListItemButton>
                        <ListItemIcon>
                            <SearchIcon />
                        </ListItemIcon>
                    </ListItemButton>
                </MyList>
                <Actions matches={matches}/>
            </AppbarContainer>
        /**
         * Appbar Container
         * Header
         * List
         */
        
    )
}