import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import {ProviderContext} from '../../store/ProvidersContext';

//import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ProvidersTable() {
  const classes = useStyles();
  const [provContext,setProvContext] = useContext(ProviderContext)
  
  const setSelect = (val) => {
    setProvContext({
      providers: provContext.providers.map(value => {
        if(value.provider_id === val.provider_id){
          value.selected = !value.selected;
        }
        return value;
      })
    })
  }

  return (
    <List className={classes.root}>
      {provContext.providers.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value.provider_id} role={undefined} dense button onClick={() => {setSelect(value)}}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={value.selected}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`${value.provider_name}`}/>
            
          </ListItem>
        );
      })}
    </List>
  );
}