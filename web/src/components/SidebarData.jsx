import React from 'react'
import HomeIcon from '@mui/icons-material/HomeOutlined';
import LocalFloristIcon from '@mui/icons-material/LocalFloristOutlined';
import AutoStoriesIcon from '@mui/icons-material/AutoStoriesOutlined';
import AddAPhotoIcon from '@mui/icons-material/AddAPhotoOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesomeOutlined';

export const SidebarData = [
  {
    title: "today",
    icon: <HomeIcon/>,
    link: "/"
  },

  {
    title: "gratitudes",
    icon: <LocalFloristIcon/>,
    link: "/gratitudes"
  },

  {
    title: "moments",
    icon: <AutoAwesomeIcon/>,
    link: "/moments"
  },

  // {
  //   title: "create",
  //   icon: <AddAPhotoIcon />,
  //   link: "/create"
  // },

  // {
  //   title: "story",
  //   icon: <AutoStoriesIcon/>,
  //   link: "/story"
  // },




]