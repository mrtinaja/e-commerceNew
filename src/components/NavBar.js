Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@mrtinaja 
mrtinaja
/
e-commerceNew
Private
1
00
Code
Issues
Pull requests
Actions
Projects
Security
Insights
Settings
e-commerceNew
/
src
/
components
/
NavBar.js
in
main
 

Spaces

2

No wrap
1
import React from 'react';
2
import { makeStyles } from '@material-ui/core/styles';
3
import AppBar from '@material-ui/core/AppBar';
4
import Toolbar from '@material-ui/core/Toolbar';
5
import Typography from '@material-ui/core/Typography';
6
import { Badge, Button} from '@material-ui/core';
7
import IconButton from '@material-ui/core/IconButton';
8
import logo from "../assets/descarga.png";
9
import { ShoppingCart } from '@material-ui/icons';
10
import { Link } from "react-router-dom";
11
import { useStateValue, } from "../StateProvider";
12
import { actionTypes } from '../reducer';
13
import { useHistory } from 'react-router-dom';
14
import { auth } from '../firebase';
15
​
16
​
17
const useStyles = makeStyles((theme) => ({
18
  root: {
19
    flexGrow: 1,
20
    marginBottom: "7rem",
21
  },
22
  appBar: {
23
    backgroundColor: "#D2B4DE  ",
24
    boxShadow: "none",
25
​
26
  },
27
  grow: {
28
    flexGrow: 1,
29
  },
30
  button: {
31
    marginLeft: theme.spacing(2),
32
  },
33
  image: {
34
    marginRight: "10px",
35
  }
36
}));
37
​
38
const NavBar = () => {
39
  const classes = useStyles();
40
  const [{ basket, user }, dispatch] = useStateValue();
41
  const history = useHistory()
42
​
43
  const handleAuth = ()=>{
44
    if (user){
45
    auth.signOut();
46
    dispatch({ 
47
      type: actionTypes.EMPTY_BASKET,
48
      basket: [], 
49
     });
50
     dispatch({ 
51
      type: actionTypes.SET_USER,
52
      user: null, 
53
     });
54
    history.push("/")
55
  }
56
  }
@mrtinaja
Commit changes
Commit summary
Create NavBar.js
Optional extended description
Add an optional extended description…
 Commit directly to the main branch.
 Create a new branch for this commit and start a pull request. Learn more about pull requests.
 
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
