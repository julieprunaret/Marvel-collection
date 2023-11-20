import { AtSignIcon, CalendarIcon, StarIcon } from '@chakra-ui/icons';
import { List, ListIcon, ListItem } from '@chakra-ui/react';
// import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <a href="https://developer.marvel.com/" target="_blank">
          <ListIcon as={StarIcon} color="white" />
          API's website
        </a>
      </ListItem>
      <ListItem>
        <a href="https://github.com/julieprunaret" target="_blank">
          <ListIcon as={AtSignIcon} color="white" />
          By Julie
        </a>
      </ListItem>
    </List>
  );
};

export default Sidebar;
