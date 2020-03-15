import React, { Fragment, useEffect, useRef, useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default ( props ) => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    setSticky(ref.current.getBoundingClientRect().top <= 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
        <ListGroup horizontal className='stickyHeaderBlock sticky-inner' >
          <ListGroupItem onClick={()=>{props.onClick(0)}} >
            <img alt='abc' src={require('../../assets/images/add money-min.png')} height="20" width="20"/> 
            All
            { props.selectedTab === 0 && <div className='undelineSport'></div> }
          </ListGroupItem>
          {
            props.items.map((item,index)=>{
              return(
                <ListGroupItem key={'sportsList'+ item.sports_id} onClick={()=>{props.onClick(item.sports_id)}} >
                  <img alt='abc' src={props.selectedTab === item.sports_id ? item.sports_img_url : item.sports_unselected_img_url} height="20" width="20"/> 
                  {item.sports_name}
                  { props.selectedTab === item.sports_id && <div className='undelineSport'></div> }
                </ListGroupItem>
              )
            })
          }
        </ListGroup>
      </div>
    </Fragment>
  );
};