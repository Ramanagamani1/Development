import React,{useState} from "react";
import styles from './Accordian.module.css';
import PropTypes from 'prop-types';

function Accordian({heading,children,type}) {

   const [isExpanded, setIsExpanded] = useState(false);

   function handleAccordianToggle() {
      setIsExpanded(!isExpanded)
   }

    return (
        <div className={styles.root}>
            <div 
               className={styles.heading}
               onClick={handleAccordianToggle}>
                <div className={styles.title}>
                  {heading}
                </div>
                <div>
                    {isExpanded ? '-': '+'}
                </div>
            </div>
            {
                isExpanded && (
                    <div className={styles.content}>
                      {children}
                    </div>
                )
            }
           
        </div>
    )
}

Accordian.defaultProps = {
    defaultExpanded : false
}

Accordian.propTypes =  {

    heading: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf([
        'danger','primary','success'
    ])
}

export default Accordian;