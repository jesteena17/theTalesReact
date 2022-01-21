import React  from 'react';
import MenuItem from '../menuitem/MenuItem';
import './mainmenupage.styles.scss';
import { connect } from 'react-redux';
import { selectMainmenuSections } from '../../redux/mainmenu/mainmenu.selectors';
import { createStructuredSelector } from 'reselect';

const  MainMenu =({sections})=>{
        // dirct destruture
        const result = sections.map(({ id, title, imageUrl, subtitle, size, urlLink }) => {
            return (
                    <MenuItem key={id} id={id} title={title} subtitle={subtitle} urlLink={urlLink} imageUrl={imageUrl} size={size} />
            );
        })
        return (
            <div className='pagemenu'>

                {result}

            </div>
        )
    }


    const mapStateToProps=createStructuredSelector({
        sections:selectMainmenuSections});
    export default  connect(mapStateToProps)(MainMenu) ;
