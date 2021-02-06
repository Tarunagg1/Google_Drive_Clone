import React from 'react'
import GDlogo from '../../media/drive-logo.png'
import '../../styles/Header.css'

import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';


export default function Header({profilePhoto}) {
    return (
            <div className="header">
                <div className="header__logo">
                    <img src={GDlogo} alt="Not found" srcSet=""/>
                    <span>Hapty Drive</span>
                </div>
                <div className="header__searchContainer">
                    <div className="header__searchBar">
                     <SearchIcon />     
                        <input type="text" placeholder="search in drive..."/>    
                     <ExpandMoreIcon />
                    </div>
                </div>
                <div className="header__icons">
                    <span>
                        <HelpOutlineIcon />
                        <SettingsIcon />
                         <AppsIcon />
                         {/* <img src={profilePhoto} alt="not found"/> */}
                         <AccountCircleIcon />
                    </span>
                </div>
            </div>
    )
}
