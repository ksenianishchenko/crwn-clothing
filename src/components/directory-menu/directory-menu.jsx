import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import MenuItem from '../menu-item/menu-item';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import './directory.styles.scss';

const DirectoryMenu = ({sections}) => {
  return <div className='directory-menu'>
    {
      sections.map(section => <MenuItem
        key={section.id}
        title={section.title}
        imageUrl={section.imageUrl}
        size={section.size}
        linkUrl={section.linkUrl}
      />)
    }
  </div>
}

const mapStateToProps = state => createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps, null)(DirectoryMenu);
