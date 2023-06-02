import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className='app__chef section__padding flex__center'>
    <div className='app__chef-img'>
      <img src={images.chef}/>
    </div>
    <div className='app__chef-content'>
      <SubHeading title="Our Chef"/>
      <p className='headtext__cormorant'>What're we gonna eat</p>
      <p className='p__opensans'><span><img src={images.quote}/></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vitae quos nobis dolorem ipsam consectetur sapiente cum itaque nulla unde harum quidem aperiam quas, minima autem incidunt. At, consectetur aut?</p>
      <div className='app__chef-titles'>
        <h1>Joseph Erian</h1>
        <h4>Web Designer</h4>
      </div>
      <div className='app__chef-sign'>
        <img src={images.sign} />
      </div>
    </div>
  </div>
);

export default Chef;
