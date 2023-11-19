import { InputBase, alpha, styled } from "@mui/material";
import React, { ChangeEvent, useCallback } from "react";
import SearchIcon from '@mui/icons-material/Search';


const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.primary.main, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
    marginTop: "1em",
    marginBottom: "1em"
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
        width: "20ch",
        },
    },
}));


export const SearchComponent = ({ filterText, onChangeText }: { filterText: string, onChangeText: (val:string)=>void }) => {
    const handler = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChangeText(e.target.value );
}, [onChangeText]);

    return(
        <Search  sx={{flexGrow: 1}}>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                onChange={handler}
                value={filterText}
                placeholder="Поиск…"
                inputProps={{ 'aria-label': 'поиск' }}
            />
        </Search>
    )
}