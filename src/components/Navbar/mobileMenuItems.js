import React from 'react';
import { Icon } from '@material-ui/core';
// Icons
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import StarIcon from '@material-ui/icons/Star';
import CreateIcon from '@material-ui/icons/Create';

import FellowshipProgramSvg from '../../assets/Icons/FellowshipProgram.svg';
import ApplySvg from '../../assets/Icons/Apply.svg';

export const loggedOutMenuItems = [
  {
    text: 'Home',
    link: '/',
    icon: <HomeIcon />,
  },
  {
    text: 'About Us',
    link: '/about-us',
    icon: <GroupIcon />,
  },
  {
    text: 'Fellowship Program',
    link: '/fellowship-program',
    icon: <StarIcon />,
    // (
    //   <Icon>
    //     <img src={FellowshipProgramSvg} alt='icon' width={24} height={24} />
    //   </Icon>
    // ),
  },
  {
    text: 'Apply',
    link: '/apply',
    icon: <CreateIcon />,
    // (
    //   <Icon>
    //     <img src={ApplySvg} alt='icon' width={24} height={24} />
    //   </Icon>
    // ),
  },
];

export const loggedInMenuItems = [
  {
    text: 'Dashboard',
    link: '/dashboard',
    icon: <HomeIcon />,
  },
  {
    text: 'Profile',
    link: '/profile',
    icon: <AccountCircleIcon />,
  },
];
