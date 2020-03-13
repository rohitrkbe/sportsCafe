import React, { Fragment, useEffect, useRef, useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default ( props ) => {
  const [isSticky, setSticky] = useState(false);
  const [listItems, setListItems] = useState([]);
  
  const ref = useRef(null);
  
  const handleScroll = () => {
    setSticky(ref.current.getBoundingClientRect().top <= 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    let tempArray=[];
    for(let i=0; i<props.items.length; i++){
        if( tempArray.includes(props.items[i].contest_type) ){
            continue;
        }else{
            tempArray.push(props.items[i].contest_type);
        }
    }
    setListItems(tempArray);


    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <Fragment>
        <div className={`whiteBg sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
            <ListGroup horizontal className='sticky-inner' >
                <ListGroupItem onClick={()=>{props.onClick('all')}} >
                    All ({props.items.length})
                    { props.selectedTab === 'all' && <div className='undelineSport'></div> }
                </ListGroupItem>
                {
                    listItems.map((item,index)=>{
                        return(
                            <ListGroupItem key={'tabList'+index} onClick={()=>{props.onClick(item)}} >
                                {item}
                                { props.selectedTab === item && <div className='undelineSport'></div> }
                            </ListGroupItem>
                        );
                    })
                }
            </ListGroup>
        </div>
    </Fragment>
  );
};