import React from 'react';

import './About.css';
class About extends React.Component{
  constructor(props){
    super(props)

  }

  gameClose(){

  }

  render(){
    return(
      <div className="aboutWrap">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu accumsan mi, et fermentum mi. Fusce eget sapien ante. Donec dictum mauris magna, at auctor nibh consectetur a. Sed sagittis mi viverra diam varius cursus. Ut vel lectus tincidunt, porttitor nunc vitae, consequat nisl. Nam quis elementum arcu, sed ultricies mi. Nullam augue nulla, maximus sed ullamcorper sit amet, efficitur a eros. Vestibulum hendrerit, nibh eu hendrerit consequat, odio turpis vulputate ipsum, et eleifend augue elit sed arcu. Phasellus interdum gravida sollicitudin. Ut nec metus eros. In aliquet eu enim nec cursus. Curabitur varius dolor eget pharetra eleifend.</p>
      </div>
    )
  }
}

export default About;
