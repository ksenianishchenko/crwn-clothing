import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import MenuItem from '../menu-item/menu-item';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';

import {
  DirectoryMenuContainer
} from './directory.styles';

const DirectoryMenu = ({sections}) => {
  return <DirectoryMenuContainer>
    {
      sections.map(section => <MenuItem
        key={section.id}
        title={section.title}
        imageUrl={section.imageUrl}
        size={section.size}
        linkUrl={section.linkUrl}
      />)
    }
  </DirectoryMenuContainer>
}

const mapStateToProps = state => createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps, null)(DirectoryMenu);
