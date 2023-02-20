import React from 'react'
import '../../Styles/Treatment.css'
import image1 from '../../Image/image1.jpg'
import image2 from '../../Image/image2.jpg'
import image3 from '../../Image/image3.jpg'
import image4 from '../../Image/image4.jpg'
import image5 from '../../Image/image5.jpg'
import image6 from '../../Image/image6.jpg'
import { BsArrowRight } from "react-icons/bs";
import {IoLocationOutline} from 'react-icons/io5'


const data = [
    {
        image: image1,
        title: 'Featured Resident Area',
        location: 'Lorem ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua........'
    },
    {
        image: image2,
        title: 'Featured Resident Area',
        location: 'Lorem ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua........'
    },
    {
        image: image3,
        title: 'Featured Resident Area',
        location: 'Lorem ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua........'
    },
    {
        image: image4,
        title: 'Featured Resident Area',
        location: 'Lorem ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua........'
    },
    {
        image: image5,
        title: 'Featured Resident Area',
        location: 'Lorem ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua........'
    },
    {
        image: image6,
        title: 'Featured Resident Area',
        location: 'Lorem ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua........'
    }
]


const Treatment = () => {
    return (
        <div className='treatment-container'>
            <div className='treatment-main'>
                <div className='treatment-mainTitle'>
                <h1>Treatment Methods</h1>
                </div>
                <div className='treatment-header headingTitle'>
                    <div className='Tab-headingTitle'>
                        <div className='treatment-title'>
                            Treatment for Adolescent Rehabs
                        </div>
                        <div className='treatment-title'>
                            Non 12 Step
                        </div>
                        <div className='treatment-title'>
                            Depression Treatment
                        </div>
                        <div className='treatment-title'>
                            Eating Disorder Treatment
                        </div>
                        <div className='treatment-title'>
                            Asia Rehab Centers
                        </div>
                    </div>
                    <div>
 
                        <button>
                            view all
                        </button>
                    </div>
                </div>
               
                <div className='treatment-header  headingTitleBox'>
                    <div className='treatment-headerBox'>
                        {
                            data.map((item, index) =>

                            (
                                <div key={index} className='treatment-headerMain'>
                                    <div className='treatment-image'>
                                        <img src={item.image} alt={item.title}></img>
                                    </div>
                                        <div className='treatment-Content'>
                                        <h3>{item.title}</h3>
                                        <h6><IoLocationOutline/>{item.location}</h6>
                                        <p>{item.content}</p>
                                        </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
               <span> <button className='treatment-button'>
                View All<BsArrowRight className="treatment-icon" />
            </button> </span>
            </div>
           
        </div>
    )
}

export default Treatment
