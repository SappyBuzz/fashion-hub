import React from 'react';
import sections from './directory.data';
import MenuItems from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections:sections
        }
    }

    render(){
        console.log(this.state)
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({title,imageUrl,id,size})=>(
                        <MenuItems key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        );
    }

}

export default Directory;