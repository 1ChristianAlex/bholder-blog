import { List, ListItem } from '@material-ui/core';
import React, { useContext } from 'react';
import { DrawerBholder, ListItemIconBh, ListItemTextBh } from './styles';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ListIcon from '@material-ui/icons/List';
import { DashboardContext } from '../DashboardContainer/DashboradProvider';
import { privateRoutes } from './../../app/Routes/RoutesNames';
import { useHistory, useLocation } from 'react-router';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SettingsIcon from '@material-ui/icons/Settings';

const SideDrawer: React.FC = () => {
  const { drawerOpen } = useContext(DashboardContext);

  const { pathname } = useLocation();
  const history = useHistory();

  const menuItens = [
    {
      Icon: HomeIcon,
      name: 'Dashboard',
      url: privateRoutes.dashboard,
      isSelected: pathname === privateRoutes.dashboard,
    },
    {
      Icon: MenuBookIcon,
      name: 'Páginas',
      url: privateRoutes.pages,
      isSelected: pathname === privateRoutes.pages,
    },
    {
      Icon: PostAddIcon,
      name: 'Criar Página',
      url: privateRoutes.singlePosts.replace(':id?', ''),
      isSelected: pathname === privateRoutes.singlePosts.replace(':id?', ''),
    },
    {
      Icon: ListIcon,
      name: 'Postagens',
      url: privateRoutes.posts,
      isSelected: pathname === privateRoutes.posts,
    },
    {
      Icon: PostAddIcon,
      name: 'Criar Postagem',
      url: privateRoutes.singlePage.replace(':id?', ''),
      isSelected: pathname === privateRoutes.singlePage.replace(':id?', ''),
    },
    {
      Icon: SettingsIcon,
      name: 'Configurações',
      url: privateRoutes.config,
      isSelected: pathname === privateRoutes.config,
    },
  ];

  const goTo = (url: string) => {
    history.push(url);
  };

  return (
    <DrawerBholder variant="persistent" open={drawerOpen}>
      <List>
        {menuItens.map(({ Icon, isSelected, name, url }) => (
          <ListItem button key={url} onClick={() => goTo(url)}>
            <ListItemIconBh $currentRoute={isSelected}>
              <Icon />
            </ListItemIconBh>
            <ListItemTextBh $currentRoute={isSelected} primary={name} />
          </ListItem>
        ))}
      </List>
    </DrawerBholder>
  );
};

export default SideDrawer;
