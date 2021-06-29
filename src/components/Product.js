import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import { AddShoppingCart } from '@material-ui/icons';
import accounting from "accounting";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import { useState } from 'react'






const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    action: {
      marginTop: "1rem"
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Product({
  product: { id, name, productType, image, price, rating, description },
}) {
  const classes = useStyles();
    // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket = (basket) => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id: id,
        name: name,
        productType: productType,
        image: image,
        price: price,
        rating: rating,
        description: description,
      }
    })
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography
            className={classes.actiom}
            variant='h6'
            color='text-secondary'
          >
            {accounting.formatMoney(price)}
          </Typography>
        }

        title={name}
        subheader="In Stock"
      />
      <CardMedia className={classes.media} image={image} title={name} />
      <CardContent>
        <Typography variant='body2' color='text-secondary' component='h2'>
          {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='Add to Cart' onClick={addToBasket}>
          <AddShoppingCart fontSize='large' />
        </IconButton>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>&#11088;</p>
          ))}

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
