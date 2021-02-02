import React from 'react';
import { Button } from '@material-ui/core';
import './SideBar.css';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption';

function SideBar() {
    return (
        <div className="sidebar">
            <Button
                startIcon={<AddIcon fontsize="large" />}
                className="side__compose"
            >
                Compose
            </Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} />
        </div>
    );
}

export default SideBar;
