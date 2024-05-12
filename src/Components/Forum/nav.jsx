// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 'auto', // Align search bar to the right
//   marginRight: theme.spacing(2), // Add some margin to the right side
//   width: 'auto', // Set width to auto
//   [theme.breakpoints.up('sm')]: {
//     width: 'auto', // Adjust width for larger screens if needed
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '12ch',
//     [theme.breakpoints.up('sm')]: {
//       width: '20ch',
//     },
//   },
// }));

// export default function SearchAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             Health Forum 
//           </Typography>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }


import React from "react";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchAppBar(){
  return (
    <div className="flex justify-center my-8">
      <div className=" flex border-b-2  border-gray-200 w-3/4 text-2xl font-extralight justify-between">
        <ul className="flex p-4">
          <a href=""><li className="px-4 text-slate-500 hover:text-slate-700 active:text-slate-900">Categories</li></a>
          <a href=""><li className="px-4 text-slate-500 hover:text-slate-700 active:text-slate-900">All Posts</li></a>
          <a href=""><li className="px-4 text-slate-500 hover:text-slate-700 active:text-slate-900">My Posts</li></a>
        </ul>

        <div className="border-2 border-gray-300 p-2 m-2  h-12 ">
          <SearchIcon className="text-gray-500"/>
          <input type="text" placeholder="Search ..." className="outline-0 px-2 font-extralight"/>
        </div>
      </div>
    </div>
  );
}